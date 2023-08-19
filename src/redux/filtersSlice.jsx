import { createSlice} from '@reduxjs/toolkit';

const filtersInitialState = {
  textFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeTextFilter(state, action) {
      state.textFilter = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
