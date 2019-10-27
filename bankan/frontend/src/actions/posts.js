import axios from "axios";
// import { createMessage, returnErrors } from "./messages";
// import { tokenConfig } from "./auth";

import { GET_LEADS } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos") //, tokenConfig(getState))  /api/posts/
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
