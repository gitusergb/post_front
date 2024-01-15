import './App.css';
import  {Navbar} from "./components/Navbar";
import {MainRoutes} from "./components/MainRoutes";

function App() {
  return (
    <div className="App">
     <h2>Post App</h2>
     <Navbar />
     <MainRoutes />
    </div>
  );
}
export default App;