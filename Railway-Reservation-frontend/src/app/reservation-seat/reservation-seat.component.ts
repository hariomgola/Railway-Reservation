import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../service/reservation-service.service';
import { automaticSeatMapping } from '../logic/seat-selection.logic';

@Component({
  selector: 'reservation-seat',
  templateUrl: './reservation-seat.component.html',
  styleUrls: ['./reservation-seat.component.css'],
})
export class ReservationSeatComponent implements OnInit, OnDestroy {
  isError = false;
  errorMessage = 'Please provide the correct input !';
  seatAllowed = 10;
  seatServiceData: any;
  seatMapForm!: FormGroup;
  seatMapArray: string[] = [];
  selectedSealtData: string[] = [];

  constructor(
    readonly fromBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly reservationService: ReservationService
  ) {}

  // oninit functionality
  ngOnInit() {
    this.buildSeatMapForm();
    this.getSeatMapData();
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
      D: [{ value: true, disabled: true }],
      E: [{ value: true, disabled: true }],
      F: [{ value: true, disabled: true }],
      G: [{ value: true, disabled: true }],
    });
  }

  // execute the submit functionality
  onSubmit() {
    this.calculateSeat();
    if (this.seatAllowed !== this.selectedSealtData.length) {
      this.isError = true;
      return;
    }
    this.router.navigate(['ticket-check']);
  }

  // execute the go back functionality
  onBackButton() {
    this.router.navigate([''], { relativeTo: this.route });
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

  // retunr the seat mapping for ui ['A','B','C','D','E','F','G']
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
