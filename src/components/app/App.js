import './App.css';
import {Container} from "react-bootstrap";
import Header from "../header/Header";
import Expenses from "../expenses/Expenses";
function App() {
  return (
    <Container>
        <Header/>
        <Expenses/>
    </Container>
  );
}

export default App;
