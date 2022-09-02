import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import ToDoMain from "./ToDoMain";
import "./App.css";


export const App = () => {
    return (
    <div className="app">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

    </div>
    );
    }