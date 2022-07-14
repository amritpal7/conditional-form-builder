import "./App.css";
import FormFields from "./Components/FormFields.jsx";
import { Container } from "@mui/material";
import DrawerAppBar from "./Components/AppBar.jsx";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Container maxWidth="md">
        <FormFields />
      </Container>
    </div>
  );
}

export default App;
