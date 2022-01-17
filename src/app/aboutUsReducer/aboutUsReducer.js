import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import membersApiActions from "../../Services/membersService";

const aboutUsInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getAll = createAsyncThunk("aboutUs/getAll",membersApiActions.getMembers);
export const create = createAsyncThunk("aboutUs/create",membersApiActions.createMember);
export const getById = createAsyncThunk("aboutUs/getById",membersApiActions.getMember);
export const update = createAsyncThunk("aboutUs/update",(member)=>membersApiActions.updateMember(member.member,member.memberId));
export const updateOrCreate = createAsyncThunk("aboutUs/updateOrCreate",(member)=>membersApiActions.updateOrCreate(member.member,member.memberId));
export const deleteById = createAsyncThunk("aboutUs/deleteById",membersApiActions.removeMember);

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: aboutUsInitialState,
  extraReducers: {
    [getAll.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getAll.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [getAll.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [create.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [create.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    },
    [create.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [getById.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getById.fulfilled]: (state, action) => {
      return {
        ...state,
        currentNews: action.payload,
        loading: false,
      };
    },
    [getById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [update.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [update.fulfilled]: (state, action) => {
      const newData = state.data.map((element) =>
                  element.id === action.payload.id ? action.payload : element);
      return {
              ...state,
              data: newData,
              loading: false,
            };
    },
    [update.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [updateOrCreate.pending]: (state) => {
      state.loading = true;
      return {
        ...state,
        loading: true,
      };
    },
    [updateOrCreate.fulfilled]: (state, action) => {
      const isUpdate = state.data.includes(action.payload.id);
      if (isUpdate){
        const newData = state.data.map((element) =>
        element.id === action.payload.id ? action.payload : element);
        return {
            ...state,
            data: newData,
            loading: false,
        };
      }
      else return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    },
    [updateOrCreate.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [deleteById.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deleteById.fulfilled]: (state, action) => {
      return {
        ...state,
      data: [...state.data.filter((news) => news.id != action.meta.arg)],
      loading: false,
      }
    },
    [deleteById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
  },
});
export default aboutUsSlice.reducer;
