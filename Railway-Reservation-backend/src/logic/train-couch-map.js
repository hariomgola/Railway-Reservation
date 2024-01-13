const couchSittingMap = {
  'A': false,
  'B': false,
  'C': false,
  'D': false,
  'E': false,
  'F': false,
  'G': false,
};
const couchEndSittingMap = {
  'A': false,
  'B': false,
  'C': true,
};
const couchMap = {};
const seat = {
  seat_total: 0,
  seat_vacant: 0,
  seat_booked: 0,
};

const pushDataForCouch = () => {
  // pushing regular couch map
  for (let i = 0; i < 11; i++) {
    couchMap[i + 1] = couchSittingMap;
  }
  // pusshing end couch map
  couchMap['12'] = couchEndSittingMap;
  seatCalculator();
};

const seatCalculator = () => {
  for (const data in couchMap) {
    for (const [key, value] of Object.entries(couchMap[data])) {
      seat.seat_total += 1
      if (value) seat.seat_booked += 1;
      if (!value) seat.seat_vacant += 1;
    }
  };
};

module.exports = {
  couchMap,
  pushDataForCouch,
  seat,
};
