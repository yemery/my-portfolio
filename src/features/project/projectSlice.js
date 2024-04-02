import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../assets/data/sitedata";
const initialState = {
  projects: projects,
  selectedProject: [],
  tools: {},
};
export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    filterByTools: (state, action) => {
      console.log(action.payload);
      state.selectedProject = state.projects.filter((e) =>
        Object.keys(action.payload).some((v) => e.tools.includes(v))
      );

      state.tools={...action.payload}
      // console.log(state.selectedProject)
    },
    
  },
});
export const { filterByTools } = projectSlice.actions;
export default projectSlice.reducer;
