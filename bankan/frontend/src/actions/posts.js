import axios from "axios";
// import { createMessage, returnErrors } from "./messages";
// import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/posts/") //, tokenConfig(getState))  /api/posts/
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}/`) //, tokenConfig(getState))
    .then(res => {
      //dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
