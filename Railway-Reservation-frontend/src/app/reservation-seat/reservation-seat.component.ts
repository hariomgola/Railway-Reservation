import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../service/reservation-service.service';
import { automaticSeatMapping } from '../logic/seat-selection.logic';
import { TicketSearchData } from '../models/reservation.model';

@Component({
  selector: 'reservation-seat',
  templateUrl: './reservation-seat.component.html',
  styleUrls: ['./reservation-seat.component.css'],
})
export class ReservationSeatComponent implements OnInit, OnDestroy {
  isError = false;
  errorMessage = '';
  seatAllowed: number = 0;
  seatServiceData: any;
  seatMapForm!: FormGroup;
  seatMapArray: string[] = [];
  selectedSealtData: string[] = [];
  seatRouterData!: TicketSearchData;

  constructor(
    readonly fromBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly reservationService: ReservationService
  ) {
    this.routerFunctionality();
  }

  routerFunctionality() {
    this.route.queryParams.subscribe((params: any) => {
      if (params) {
        this.seatRouterData = JSON.parse(params.data);
        this.seatAllowed = this.seatRouterData._ticket;
      }
    });
  }

  // oninit functionality
  ngOnInit() {
    this.buildSeatMapForm();
    this.getSeatMapData();
    this.disablefilledValue();
    this.mapSelectedSeatValue();
  }

  // function to get data
  getSeatMapData() {
    this.seatServiceData =
      this.reservationService.getTrainSeatMapping()?.trainMap;
    this.seatMapArray = Object.keys(this.seatServiceData).sort();
    this.seatMapForm.setValue(this.seatServiceData);
  }

  // building the seat map form
  buildSeatMapForm() {
    this.seatMapForm = this.fromBuilder.group({
      '01': this.getSeatFormBuilder(),
      '02': this.getSeatFormBuilder(),
      '03': this.getSeatFormBuilder(),
      '04': this.getSeatFormBuilder(),
      '05': this.getSeatFormBuilder(),
      '06': this.getSeatFormBuilder(),
      '07': this.getSeatFormBuilder(),
      '08': this.getSeatFormBuilder(),
      '09': this.getSeatFormBuilder(),
      '10': this.getSeatFormBuilder(),
      '11': this.getSeatFormBuilder(),
      '12': this.getLimitedSeatFromBuilder(),
    });
  }
  getSeatFormBuilder() {
    return this.fromBuilder.group({
      A: [false],
      B: [false],
      C: [false],
      D: [false],
      E: [false],
      F: [false],
      G: [false],
    });
  }
  getLimitedSeatFromBuilder() {
    return this.fromBuilder.group({
      A: [false],
      B: [false],
      C: [false],
    });
  }
  disablefilledValue() {
    this.seatMapArray.forEach((data) => {
      for (const [key, value] of Object.entries(this.seatMapForm.value[data])) {
        const control = <FormGroup>this.seatMapForm.get(data);
        if (control.get(`${key}`)?.value) control.get(`${key}`)?.disable();
      }
    });
  }

  mapSelectedSeatValue() {
    if (this.seatRouterData._couch === 'Automatic') {
      const _data = automaticSeatMapping(
        this.seatServiceData,
        this.seatAllowed
      );
      _data.forEach((data) => {
        const control = <FormGroup>(
          this.seatMapForm.get(`${data.substring(0, 2)}`)
        );
        control.get(`${data.substring(2, 3)}`)?.setValue(true);
      });
    }
  }

  // execute the submit functionality
  onSubmit() {
    this.calculateSeat();
    if (this.seatAllowed !== this.selectedSealtData.length) {
      this.errorMessage = `Please provide the correct input !<br> Seat Booked: ${this.seatAllowed} <br> Seat Selected: ${this.selectedSealtData.length}`;
      this.isError = true;
      return;
    }
    this.reservationService.submitTicketData(this.selectedSealtData);
    this.router.navigate(['ticket-check']);
  }

  // execute the go back functionality
  onBackButton() {
    this.router.navigate(['']);
  }
  onCheckBoxClick(event: any) {
    const data = {
      checkBoxId: event?.target.id ? event?.target.id : undefined,
      checkBoxValue: event?.target.checked ? event?.target.checked : undefined,
      row: event?.target.id ? `${event?.target.id}`.substring(0, 2) : undefined,
      seat: event?.target.id
        ? `${event?.target.id}`.substring(2, 3)
        : undefined,
    };
  }

  // return the seat mapping for ui ['A','B','C','D','E','F','G']
  getSeatMapping(data: string): string[] {
    return Object.keys(this.seatServiceData[data]);
  }

  // function to calculate the number of seat reserved
  calculateSeat() {
    this.selectedSealtData = [];
    for (const _rowData in this.seatMapForm.value) {
      for (const [key, value] of Object.entries(
        this.seatMapForm.value[_rowData]
      )) {
        if (
          this.seatMapForm.value[_rowData][key] !==
          this.seatServiceData[_rowData][key]
        ) {
          this.selectedSealtData.push(`${_rowData}${key}`);
        }
      }
    }
  }

  // closing the popup function
  onClosingModelPopup(flagValue: boolean) {
    this.isError = flagValue;
  }

  // ngondestroy functionality
  ngOnDestroy() {}
}
