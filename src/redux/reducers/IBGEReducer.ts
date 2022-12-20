import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultCityValues } from "../../interface/interfaceCity";
import {
  defaultDistrictValue,
  IDistrict,
} from "../../interface/interfaceDistrict";
import { defaultStateValues, IState } from "../../interface/interfaceState";
import { ICity } from "../../interface/interfaceCity";

const initialState = {
  loading: false,
  allStates: defaultStateValues,
  allCities: defaultCityValues,
  districts: defaultDistrictValue,
};

const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

// Actions

export const getAllStates = createAsyncThunk(
  "IBGE/fetch_all_states",
  async () => {
    return await axios.get<IState[]>(`${apiUrl}/estados?orderBy=nome`);
  }
);

export const getAllCities = createAsyncThunk(
  "IBGE/fetch_all_cities",
  async (UF: string) => {
    return await axios.get<ICity[]>(
      `${apiUrl}/estados/${UF}/municipios?orderBy=nome`
    );
  }
);

export const getDistrict = createAsyncThunk(
  "IBGE/fetch_district",
  async (idCity: number) => {
    return await axios.get<IDistrict[]>(
      `${apiUrl}/municipios/${idCity}/distritos?orderBy=nome`
    );
  }
);

// slice

export const IBGESlice = createSlice({
  name: "IBGE",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllStates.fulfilled, (state, action) => {
        state.loading = false;
        state.allStates = action.payload.data;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loading = false;
        state.allCities = action.payload.data;
      })
      .addCase(getDistrict.fulfilled, (state, action) => {
        state.loading = false;
        state.districts = action.payload.data;
      })
      .addMatcher(
        isPending(getAllStates, getAllCities, getDistrict),
        (state) => {
          state.loading = true;
        }
      );
  },
});

// Reducer
export default IBGESlice.reducer;
