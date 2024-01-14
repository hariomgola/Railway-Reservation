import { TicketMapping } from '../models/reservation.model';
export const automaticSeatMapping = (
  seatData: TicketMapping,
  seatAllotment: number
) => {
  const seatBrakage: { row: string; seat: number }[] = [];
  const seatAutoSelection: string[] = [];
  // Getting total number of seats available in row
  Object.keys(seatData)
    .sort()
    .forEach((_rowData) => {
      let _rowSeat = 0;
      for (const [key, value] of Object.entries(seatData[_rowData])) {
        if (!value) _rowSeat += 1;
      }
      seatBrakage.push({ row: _rowData, seat: _rowSeat });
    });
  // Checking if seat can be allowed to fit in single row
  // using every loop opce false is retunr it will not execite further to decrease timecomplexity
  seatBrakage.every((data) => {
    if (seatAllotment <= data.seat) {
      for (const [key, value] of Object.entries(seatData[data.row])) {
        if (!value) {
          seatAutoSelection.push(`${data.row}${key}`);
          seatAllotment -= 1;
          if (!seatAllotment) break;
        }
      }
      if (!seatAllotment) return false;
      return false;
    }
    return true;
  });

  // Checking seat Allowed can be adjucent in adjucent rows
  if (!seatAutoSelection.length) {
    seatBrakage.every((_rowData) => {
      for (const [key, value] of Object.entries(seatData[_rowData.row])) {
        if (!value) {
          seatAutoSelection.push(`${_rowData.row}${key}`);
          seatAllotment -= 1;
          if (!seatAllotment) break;
        }
      }
      if (!seatAllotment) return false;
      return true;
    });
  }
  // returning the automatic seat selection
  return seatAutoSelection;
};
