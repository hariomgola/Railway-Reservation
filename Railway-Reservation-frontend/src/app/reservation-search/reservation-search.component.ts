import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css'],
})
export class ReservationSearchComponent implements OnInit, OnDestroy {
  ticketForm!: FormGroup;
  constructor(
    private fromBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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
      age: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9-]*'),
        Validators.min(1),
        Validators.max(80),
      ]),
      _from: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      _to: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z.][a-zA-Z. ]+'),
      ]),
      _ticket: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9-]*'),
        Validators.min(1),
        Validators.max(80),
      ]),
      _date: new Date(),
    });
  }
  onSubmit() {
    // if (this.ticketForm.invalid) {
    //   return this.ticketForm.markAllAsTouched();
    // }
    this.router.navigate(['ticket-map'], { relativeTo: this.route });
    console.log('------>', this.ticketForm.value);
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
