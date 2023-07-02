import { React } from "react";
import  Navbar  from "./Component/Navbar";
import  Body  from "./Component/body";
import  Footer  from "./Component/Footer";
import  UrlState  from "./Context/UrlState";

function App() {
  return (
    <UrlState>
    <Navbar/>
    <Body/>
    <br />
    <br />
    <br />
    <Footer/>
    </UrlState>
  );
}

export default App;
