import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../assets/data/sitedata";
const initialState = {
  projects: projects,
  selectedProject: null,
};
export const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
      
    }


});
export default projectSlice.reducer;