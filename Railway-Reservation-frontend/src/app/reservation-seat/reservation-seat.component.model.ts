export interface SeatingMap {
  [key: string]: {
    label: string;
    isAlreadyBooked: boolean;
    isChecked: boolean;
  };
}
