import { Component, OnInit } from '@angular/core';
import { TicketDetails } from '../models/reservation.model';

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
          <reservation-barcode></reservation-barcode>
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
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .creator-Hari {
        height: 98vh;
        display: grid;
        font-family: 'Staatliches', cursive;
        background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
        color: black;
        font-size: 14px;
        letter-spacing: 0.1em;
      }

      .ticketDetails {
        margin: auto;
        display: flex;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }

      .main-ticket {
        display: flex;
      }

      .railwayImage {
        /* height: 250px; */
        height: inherit;
        width: 250px;
        background-image: url('../../assets/indian-travel.png');
        background-size: contain;
        opacity: 0.85;
      }

      .company-name {
        position: absolute;
        color: darkgray;
        height: 250px;
        padding: 0 10px;
        letter-spacing: 0.15em;
        display: flex;
        text-align: center;
        justify-content: space-around;
        writing-mode: vertical-rl;
        transform: rotate(-180deg);
      }

      .company-name span:nth-child(2) {
        color: white;
        font-weight: 700;
      }

      .main-ticket .ticket-pnr {
        height: 250px;
        width: 250px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 5px;
        color: gray;
      }

      .ticket-info {
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        align-items: center;
      }

      .date {
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 5px 0;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .date span {
        width: 100px;
      }

      .date span:first-child {
        text-align: left;
      }

      .date span:last-child {
        text-align: right;
      }

      .date .month {
        color: #abecd6;
        font-size: 20px;
      }

      .show-name {
        font-size: 32px;
        font-family: 'Nanum Pen Script', cursive;
        color: #d83565;
      }

      .show-name h1 {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #4a437e;
      }

      .time {
        padding: 10px 0;
        color: #4a437e;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 700;
      }

      .time span {
        font-weight: 400;
        color: gray;
      }

      .main-ticket .time {
        font-size: 16px;
      }

      .location {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding-top: 8px;
        border-top: 1px solid gray;
      }

      .location .separator {
        font-size: 20px;
      }

      .sub-ticket {
        width: 180px;
        border-left: 1px dashed #404040;
      }

      .sub-ticket .company-name {
        color: darkgray;
      }

      .sub-ticket .company-name span:nth-child(2) {
        color: gray;
      }

      .sub-ticket .sub-ticket-container {
        height: 250px;
        padding: 10px 10px 10px 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .sub-ticket .show-name h1 {
        font-size: 18px;
      }

      .barcode {
        height: 100px;
      }

      .barcode img {
        height: 100%;
      }

      .sub-ticket .ticket-pnr {
        color: gray;
      }
    `,
  ],
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
