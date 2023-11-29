import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabrics: ['Silk', 'Cotton',  'Linen', 'Rayon'],
    selectedSizes: ['S'],
    selectedFabrics: ['Silk', 'Cotton',  'Linen', 'Rayon'],
  },
  reducers: {
    toggleSize: (state, action) => {
      const size = action.payload;
      state.selectedSizes.includes(size)
        ? (state.selectedSizes = state.selectedSizes.filter((s) => s !== size))
        : state.selectedSizes.push(size);
    },
    toggleFabric: (state, action) => {
      const fabric = action.payload;
      state.selectedFabrics.includes(fabric)
        ? (state.selectedFabrics = state.selectedFabrics.filter((f) => f !== fabric))
        : state.selectedFabrics.push(fabric);
    },
  },
});

export const { toggleSize, toggleFabric } = filtersSlice.actions;
export default filtersSlice.reducer;
