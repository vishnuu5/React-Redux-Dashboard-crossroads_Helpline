import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers as fetchUsersAPI } from "../../services/api";

// Async thunks
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await fetchUsersAPI();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastUpdated: null,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id: Date.now(), // Generate unique ID
      };
      state.items.unshift(newUser);
      state.lastUpdated = new Date().toISOString();
    },
    editUser: (state, action) => {
      const { id, userData } = action.payload;
      const index = state.items.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...userData, id };
      }
      state.lastUpdated = new Date().toISOString();
    },
    removeUser: (state, action) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
      state.lastUpdated = new Date().toISOString();
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users from API
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        if (state.items.length === 0) {
          state.items = action.payload;
        }
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      });
  },
});

export const { addUser, editUser, removeUser, clearError } = usersSlice.actions;
export default usersSlice.reducer;
