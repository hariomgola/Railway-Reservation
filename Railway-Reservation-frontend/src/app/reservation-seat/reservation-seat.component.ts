import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reservation-seat',
  templateUrl: './reservation-seat.component.html',
  styleUrls: ['./reservation-seat.component.css'],
})
export class ReservationSeatComponent {
  constructor(readonly router: Router, readonly route: ActivatedRoute) {}
  onSubmit() {
    this.router.navigate(['ticket-check']);
  }
  onBackButton() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
