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

export interface SeatingMap {
  [key: string]: {
    label: string;
    isAlreadyBooked: boolean;
    isChecked: boolean;
  };
}

export interface TicketMapping {
  [key: string]: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    G: string;
  };
}
