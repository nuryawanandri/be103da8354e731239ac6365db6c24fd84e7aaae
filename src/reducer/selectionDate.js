const selectionDate = [];
const startDate = new Date();

startDate.setDate(startDate.getDate() - 16);

for (let index = 0; index < 31; index++) {
  selectionDate.push(new Date(startDate.setDate(startDate.getDate() + 1)));
}

export const initialState = {
  selectedDate: new Date(),
  listDate: selectionDate,
};

export const selectionDateReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
