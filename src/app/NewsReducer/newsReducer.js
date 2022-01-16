import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as newsServices from "../../Services/newsServices";

const newsInitialState = {
  loading: false,
  data: [],
  error: "",
  currentNews: {
    name: "",
    content: "",
    category_id: "",
    image: "",
  },
};

export const getAll = createAsyncThunk("news/getAll", newsServices.getAll);

export const getById = createAsyncThunk("news/getById", newsServices.getById);

export const create = createAsyncThunk("news/create", newsServices.create);

export const update = createAsyncThunk("news/update", (news) =>
  newsServices.update(news.news, news.newsid)
);

export const createOrUpdate = createAsyncThunk("news/createOrUpdate", (news) =>
  newsServices.createOrUpdate(news.news, news.newsid)
);

export const deletebyId = createAsyncThunk(
  "news/delete",
  newsServices.deleteByid
);

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    cleanCurrentState: (state) => {
      state.currentNews = { name: "", content: "", category_id: "", image: "" };
    },
  },
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
    [createOrUpdate.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [createOrUpdate.fulfilled]: (state, action) => {
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
    [createOrUpdate.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [deletebyId.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deletebyId.fulfilled]: (state, action) => {
      return {
        ...state,
      data: [...state.data.filter((news) => news.id != action.meta.arg)],
      loading: false,
      }
    },
    [deletebyId.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
  },
});
export const { cleanCurrentState } = newsSlice.actions;
export default newsSlice.reducer;
