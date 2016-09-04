class Shift {}
Shift.schema = {
  name: 'Shift',
  properties: {
    startDate:  'date',
    endDate: 'date',
    minsBreak: 'int',
    hourlyRate: 'float'
  }
};

module.exports = Shift;
