import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeatMap } from '../models/reservation-map';

@Component({
  selector: 'reservation-seat',
  templateUrl: './reservation-seat.component.html',
  styleUrls: ['./reservation-seat.component.css'],
})
export class ReservationSeatComponent implements OnInit, OnDestroy {
  seatMap!: FormGroup;
  seatMapArray = Object.keys(SeatMap).sort();
  seatArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  constructor(
    readonly fromBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.buildSeatMapForm();
  }
  buildSeatMapForm() {
    this.seatMap = this.fromBuilder.group(SeatMap);
  }
  onSubmit() {
    this.router.navigate(['ticket-check']);
  }
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
  ngOnDestroy(): void {}
}
