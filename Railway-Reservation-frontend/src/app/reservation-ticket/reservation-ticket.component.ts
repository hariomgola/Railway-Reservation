import { Component, OnInit } from '@angular/core';
import { TicketDetails } from './reservation-ticket.component.model';

@Component({
  selector: 'reservation-ticket',
  template: `
    <div class="creator-Hari">
      <div *ngIf="ticketDetails" class="ticketDetails">
        <div class="main-ticket">
          <ng-container
            [ngTemplateOutlet]="imageTemplate"
            [ngTemplateOutletContext]="{
              _companyName: ticketDetails.personalDatails.companyName,
              _pnr: ticketDetails.personalDatails.pnr
            }"
          ></ng-container>
          <ng-container
            [ngTemplateOutlet]="ticketInfoTemplate"
            [ngTemplateOutletContext]="{
        _startLocation: ticketDetails.journey_start.station,
        _startTime: ticketDetails.journey_start.time,
        _endLocation: ticketDetails.journey_end.station,
        _endTime: ticketDetails.journey_end.time,
        _passengerName: ticketDetails.personalDatails.passengerName,
        _trainName: ticketDetails.personalDatails.trainName,
        _bookingDetails:bookingDate,
      }"
          ></ng-container>
        </div>
        <div class="sub-ticket">
          <ng-container
            [ngTemplateOutlet]="rightLabel"
            [ngTemplateOutletContext]="{
        _companyName: ticketDetails.personalDatails.companyName,
      }"
          ></ng-container>
          <ng-conatiner
            [ngTemplateOutlet]="ticketTemplate"
            [ngTemplateOutletContext]="{
              _passengerName: ticketDetails.personalDatails.passengerName,
              _startTime: ticketDetails.journey_start.time,
              _endTime: ticketDetails.journey_end.time,
              _pnr: ticketDetails.personalDatails.pnr
            }"
          ></ng-conatiner>
        </div>
      </div>
    </div>

    <!-- Template for image -->
    <ng-template #imageTemplate let-companyName="_companyName" let-pnr="_pnr">
      <div class="railwayImage">
        <p class="company-name">
          <span *ngFor="let itr of ['', '', '']">{{ companyName }}</span>
        </p>
        <div class="ticket-pnr">
          <p [innerText]="pnr"></p>
        </div>
      </div>
    </ng-template>

    <!-- Template for ticket information -->
    <ng-template
      #ticketInfoTemplate
      let-startLocation="_startLocation"
      let-startTime="_startTime"
      let-endLocation="_endLocation"
      let-endTime="_endTime"
      let-passengerName="_passengerName"
      let-trainName="_trainName"
      let-bookingDetails="_bookingDetails"
    >
      <div class="ticket-info">
        <p class="date">
          <ng-container
            [ngTemplateOutlet]="day"
            [ngTemplateOutletContext]="{ _day: bookingDetails.day }"
          >
          </ng-container>
          <ng-container
            [ngTemplateOutlet]="month"
            [ngTemplateOutletContext]="{
              _month: bookingDetails.month,
              _date: bookingDetails.date
            }"
          >
          </ng-container>
          <span [innerHtml]="bookingDetails.year"></span>
        </p>
        <div class="show-name">
          <h1 [innerText]="passengerName"></h1>
          <h2 [innerText]="trainName"></h2>
        </div>
        <div class="time">
          <p>{{ startTime }} <span [innerText]="'To'"></span> {{ endTime }}</p>
        </div>
        <p class="location">
          <span [innerText]="startLocation"></span>
          <span class="separator"><i class="far fa-smile"></i></span
          ><span [innerText]="endLocation"></span>
        </p>
      </div>
    </ng-template>

    <!-- Template for Right label -->
    <ng-template #rightLabel let-companyName="_companyName">
      <p class="company-name">
        <span *ngFor="let itr of ['', '', '']">{{ companyName }}</span>
      </p>
    </ng-template>

    <!-- Template for ticket information -->
    <ng-template
      #ticketTemplate
      let-passengerName="_passengerName"
      let-startTime="_startTime"
      let-endTime="_endTime"
      let-pnr="_pnr"
    >
      <div class="sub-ticket-container">
        <div class="show-name">
          <h1 [innerText]="passengerName"></h1>
        </div>
        <div class="time">
          <p>{{ startTime }} <span [innerText]="'TO'"></span> {{ endTime }}</p>
        </div>
        <div class="barcode">
          <img src="" />
        </div>
        <p class="ticket-pnr" [innerText]="pnr"></p>
      </div>
    </ng-template>

    <!-- Template for day logic -->
    <ng-template #day let-day="_day">
      <ng-container [ngSwitch]="day">
        <span *ngSwitchCase="0" [innerHtml]="'Sunday'"></span>
        <span *ngSwitchCase="1" [innerHtml]="'Monday'"></span>
        <span *ngSwitchCase="2" [innerHtml]="'Tuesday'"></span>
        <span *ngSwitchCase="3" [innerHtml]="'Wednesday'"></span>
        <span *ngSwitchCase="4" [innerHtml]="'Thurusday'"></span>
        <span *ngSwitchCase="5" [innerHtml]="'Friday'"></span>
        <span *ngSwitchCase="6" [innerHtml]="'Saturday'"></span>
        <span *ngSwitchDefault [innerHtml]="'Data not Available'"></span>
      </ng-container>
    </ng-template>

    <!-- Template for month logic -->
    <ng-template #month let-month="_month" let-date="_date">
      <ng-container [ngSwitch]="month">
        <span
          class="month"
          *ngSwitchCase="0"
          [innerHtml]="'Janurary' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="1"
          [innerHtml]="'February' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="2"
          [innerHtml]="'March' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="3"
          [innerHtml]="'April' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="4"
          [innerHtml]="'May' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="5"
          [innerHtml]="'June' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="6"
          [innerHtml]="'July' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="7"
          [innerHtml]="'August' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="8"
          [innerHtml]="'September' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="9"
          [innerHtml]="'October' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="10"
          [innerHtml]="'November' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchCase="11"
          [innerHtml]="'December' + getDateSubStringLogic(date)"
        ></span>
        <span
          class="month"
          *ngSwitchDefault
          [innerHtml]="'Data not Available'"
        ></span>
      </ng-container>
    </ng-template>
  `,
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

  constructor() {
    this.ticketDetails = {
      personalDatails: {
        pnr: '#00010001',
        passengerName: 'Hariom',
        trainName: 'Delhi Express',
        companyName: 'Inspire Travel',
        bookingDate: '01/01/2024',
      },
      journey_start: {
        date: '01/01/2023',
        time: '11:00 PM',
        station: 'Delhi, India',
      },
      journey_end: {
        date: '01/01/2023',
        time: '07:00 AM',
        station: 'Banglore, India',
      },
    };
  }
  ngOnInit() {
    this.getBookingDateDetails('01/01/2025');
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
