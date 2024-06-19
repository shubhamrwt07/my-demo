import logo from './logo.svg';
import './App.css';
import Home from "./component/home"
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
   <>
   <Home/>
   <Analytics/>
   </>
  );
}

export default App;
