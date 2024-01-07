export interface TicketDetails {
  personalDatails: {
    pnr: string;
    companyName: string;
    passengerName: string;
    trainName: string;
    bookingDate: string;
  };
  journey_start: {
    date: string;
    time: string;
    station: string;
  };
  journey_end: {
    date: string;
    time: string;
    station: string;
  };
}
