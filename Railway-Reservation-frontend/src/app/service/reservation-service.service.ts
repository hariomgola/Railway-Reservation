import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor() {}
  getTrainSeatMapping() {
    const data = {
      status: 200,
      request: {
        hello: 'man',
      },
      data: {
        seat: {
          seat_total: 80,
          seat_vacant: 79,
          seat_booked: 1,
        },
        trainMap: {
          '01': {
            A: false,
            B: false,
            C: false,
            D: false,
            E: false,
            F: false,
            G: false,
          },
          '02': {
            A: false,
            B: false,
            C: false,
            D: false,
            E: false,
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

    return data.data;
  }
}
