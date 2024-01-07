const couchSittingMap = {
  side_special: false,
  right_lower: false,
  right_middle: false,
  right_upper: false,
  left_lower: false,
  left_middle: false,
  left_upper: false,
};
const couchEndSittingMap = {
  lower: false,
  middle: false,
  upper: true,
};
const couchMap = [];
const seat = {
  totalSeatVacant: 0,
  totalSeatBooked: 0,
};

const pushDataForCouch = () => {
  // pushing regular couch map
  for (let i = 0; i < 11; i++) {
    couchMap.push(couchSittingMap);
  }
  // pusshing end couch map
  couchMap.push(couchEndSittingMap);
  seatCalculator();
};

const seatCalculator = () => {
  couchMap.forEach((data) => {
    for (const [key, value] of Object.entries(data)) {
      if (value) seat.totalSeatBooked += 1;
      if (!value) seat.totalSeatVacant += 1;
    }
  });
};

module.exports = {
  couchMap,
  pushDataForCouch,
  seat,
};
