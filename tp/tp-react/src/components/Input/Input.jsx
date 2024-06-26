import { TextField } from "@mui/material";

export const Input = ({ value, onChangeHandler, label }) => {
  return (
    <>
      <TextField
        id="name"
        name="name"
        label={label}
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
};
