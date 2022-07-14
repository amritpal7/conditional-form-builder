import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  experimentalStyled as styled,
} from "@mui/material/styles";
import { Button, Box, Typography, Grid, Paper, Divider } from "@mui/material";
import Preview from "./Preview";

const theme = createTheme({
  palette: {
    primary: {
      main: "#163172",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormFields = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Item>xs=2</Item>
          </Grid>
        </Grid>
      </Box>
      <Divider style={{ margin: "3rem" }} />
      <Preview />
    </ThemeProvider>
  );
};

export default FormFields;
