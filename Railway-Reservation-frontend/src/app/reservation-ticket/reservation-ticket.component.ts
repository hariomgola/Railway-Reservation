import { Component, OnInit } from '@angular/core';
import { TicketDetails } from '../models/reservation.model';
import { ReservationService } from '../service/reservation-service.service';

@Component({
  selector: 'reservation-ticket',
  templateUrl: './reservation-ticket.component.html',
  styleUrls: ['./reservation-ticket.component.css'],
})
export class ReservationTicketComponent implements OnInit {
  ticketDetails?: TicketDetails;
  bookingDate = {
    day: 0,
    date: 0,
    month: 0,
    year: 0,
  };

  constructor(readonly reservationService: ReservationService) {}

  ngOnInit() {
    this.ticketDetails = this.reservationService.getTicketDetails();
    this.getBookingDateDetails(this.ticketDetails.personalDatails.bookingDate);
  }

  getBookingDateDetails(_dateValue: string) {
    const date = new Date(_dateValue);
    this.bookingDate.day = date.getDay();
    this.bookingDate.date = date.getDate();
    this.bookingDate.month = date.getMonth();
    this.bookingDate.year = date.getFullYear();
    console.log(this.bookingDate);
  }
  getDateSubStringLogic(_date: number) {
    if (_date > 3 && _date < 21) return ` ${_date}th`;
    switch (_date % 10) {
      case 1:
        return ` ${_date}st`;
      case 2:
        return ` ${_date}nd`;
      case 3:
        return ` ${_date}rd`;
      default:
        return ` ${_date}th`;
    }
  }
}
