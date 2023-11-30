import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabrics: ['Silk', 'Cotton',  'Linen', 'Rayon'],
    selectedSizes: ['S'],
    selectedFabrics: ['Silk', 'Cotton',  'Linen', 'Rayon'],
    priceRange: {
      min: 0,
      max: 10000, // Set an initial max price as needed
    },
    searchTerm: '',
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
    setPriceRange: (state=initialState, action) => {
      state.priceRange = action.payload || { min: 0, max: 10000 };    },
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
  },
  
});

export const { toggleSize, toggleFabric, setPriceRange, setSearchTerm } = filtersSlice.actions;
export default filtersSlice.reducer;
