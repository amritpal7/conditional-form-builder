import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import _Select from "./Elements/Select";
import _Radio from "./Elements/Radio";
import _TextField from "./Elements/TextField";

const Preview = () => {
  const [formElements, setFormElements] = useState([]);

  return (
    <div>
      <Box
        component="span"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#163172",
        }}
      >
        <Typography>Preview</Typography>
        <_Select />
        <_Radio />
        <_TextField />
      </Box>
    </div>
  );
};

export default Preview;
