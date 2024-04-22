import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const TaskFinder = ({ label, value, onChangeHandler }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "flex-end", justifyContent: "end" }}
    >
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        id="search"
        name="serch"
        label={label}
        value={value}
        onChange={onChangeHandler}
        variant="standard"
      />
    </Box>
  );
};
