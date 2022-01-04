import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import membersApiActions from '../../Services/membersService';

const membersInitialState = {
  loading: false,
  data: [],
  error: '',
  currentMember: {
    name: '',
    description: '',
    facebookUrl: '',
  },
};

export const getAll = createAsyncThunk(
  'members/getAll',
  membersApiActions.getMembers
);
export const getById = createAsyncThunk(
  'members/getById',
  membersApiActions.getMember
);
export const create = createAsyncThunk(
  'members/create',
  membersApiActions.createMember
);

export const updateOrCreate = createAsyncThunk(
  'members/updateOrCreate',
  (member) =>
    membersApiActions
      .updateOrCreate(member.member, member.memberId)
      .catch((err) => {
        err;
      })
);

export const update = createAsyncThunk(
  'members/update',
  membersApiActions.updateMember
);
export const deletebyId = createAsyncThunk(
  'members/delete',
  membersApiActions.removeMember
);

const membersSlice = createSlice({
  name: 'members',
  initialState: membersInitialState,
  extraReducers: {
    [getAll.pending]: (state, action) => {
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
    [getById.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getById.fulfilled]: (state, action) => {
      return {
        ...state,
        currentNew: action.payload,
        loading: false,
      };
    },
    [getById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [create.pending]: (state, action) => {
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
        error: action.error,
      };
    },
    [updateOrCreate.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [updateOrCreate.fulfilled]: (state, action) => {
      const payloadNews = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      if (payloadNews >= 0) {
        state.data[payloadNews] = action.payload;
      } else {
        console.log('esta llegando');
        state.data = [...state.data, action.payload];
      }
    },
    [updateOrCreate.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [update.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [update.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [
          state.data.map((element) =>
            element.id === action.payload.id ? action.payload : element
          ),
        ],
        loading: false,
      };
    },
    [update.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [deletebyId.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deletebyId.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data.filter((id) => id !== action.payload)],
        loading: false,
      };
    },
    [deletebyId.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
  },
});
export default membersSlice.reducer;
