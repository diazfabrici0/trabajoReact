import { TextField } from "@mui/material";
import React from "react";

export const TextArea = ({ value, onChangeHandler, label }) => {
  return (
    <>
      <TextField
        id="description"
        name="description"
        label={label}
        value={value}
        onChange={onChangeHandler}
        multiline
        rows={4}
      />
    </>
  );
};
