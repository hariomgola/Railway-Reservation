import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  data = {
    status: 200,
    request: {
      hello: 'man',
    },
    data: {
      seat: {
        seat_total: 80,
        seat_vacant: 78,
        seat_booked: 2,
      },
      trainMap: {
        '01': {
          A: true,
          B: true,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '02': {
          A: false,
          B: true,
          C: false,
          D: false,
          E: true,
          F: false,
          G: false,
        },
        '03': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '04': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '05': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '06': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '07': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '08': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '09': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '10': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '11': {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
        },
        '12': {
          A: false,
          B: false,
          C: false,
          D: true,
          E: true,
          F: true,
          G: true,
        },
      },
    },
  };
  constructor() {}
  getStateData() {
    return [
      'Andhra Pradesh',
      'Andaman and Nicobar Islands',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chandigarh',
      'Chhattisgarh',
      'Dadar and Nagar Haveli',
      'Daman and Diu',
      'Delhi',
      'Lakshadweep',
      'Puducherry',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jammu and Kashmir',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
    ];
  }
  getAvailableSeat() {
    return this.data.data.seat;
  }
  getTrainSeatMapping() {
    return this.data.data;
  }
  submitTicketData(data: string[]) {}
  getTicketDetails() {
    return {
      personalDatails: {
        pnr: '#00010001',
        passengerName: 'Hariom',
        trainName: 'Delhi Express',
        companyName: 'Inspire Travel',
        bookingDate: '01/01/2024',
        seatNumber: ['02A', '02B'],
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
}
