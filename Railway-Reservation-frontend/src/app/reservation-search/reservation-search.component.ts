import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../service/reservation-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css'],
})
export class ReservationSearchComponent implements OnInit, OnDestroy {
  availableSeat = 78;
  ticketForm!: FormGroup;
  isError = false;
  errorMessage = 'Please provide the correct input !';
  stateData = this.reservationService.getStateData();
  todaysDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor(
    readonly fromBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly reservationService: ReservationService
  ) {}
  ngOnInit() {
    this.buildTicketForm();
  }
  buildTicketForm() {
    this.ticketForm = this.fromBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      age: new FormControl(1, [
        Validators.required,
        Validators.pattern('[0-9-]*'),
        Validators.min(1),
        Validators.max(100),
      ]),
      _from: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      _to: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      _ticket: new FormControl(1, [
        Validators.required,
        Validators.pattern('[0-9-]*'),
        Validators.min(1),
        Validators.max(80),
      ]),
      _couch: new FormControl('Automatic', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      _date: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), [
        Validators.required,
      ]),
    });
  }
  onSubmit() {
    if (this.ticketForm.invalid) {
      this.isError = true;
      return this.ticketForm.markAllAsTouched();
    }
    this.router.navigate(['ticket-map'], {
      queryParams: { data: JSON.stringify(this.ticketForm.value) },
    });
  }
  onClosingModelPopup(flagValue: boolean) {
    this.isError = flagValue;
  }
  ngOnDestroy() {
    this.ticketForm.reset({
      name: '',
      age: '',
      _form: '',
      _to: '',
      _ticket: 0,
      _date: new Date(),
    });
  }
}
