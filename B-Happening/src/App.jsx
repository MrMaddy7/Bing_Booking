import "./App.css";
import BackgroundMusic from './features/backgroundMusic/BackgroundMusic';
import DashboardView from './features/dashBoard/DashboardView';
import LoginView from "./features/login/LoginView";
import SignUpView from "./features/signUp/SignUpView";
import ModalView from "./features/modal/ModalView";
import Lost from './assets/Lost.jpg';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  //? Page not found component
  const renderNotFound = () => {
    const imageStyle = {
      width: "50%",  // Adjust the width as needed
      display: "block",
      margin: "0 auto",
    };

    const textStyle = {
      textAlign: "center",
    };

    return (
      <div>
        <img className="logo" src={ Lost } style={ imageStyle } alt="Lost Image" />
        <h1 style={ textStyle }>Oh dear. Are you lost?</h1>
      </div>
    );
  };

  return (
    <div className="App-layout">
      {/* <BackgroundMusic /> */ }
      <ModalView />
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={ <DashboardView /> } />
          <Route path="/Login" element={ <LoginView /> } />
          <Route path="/SignUp" element={ <SignUpView /> } />
          <Route path="*" element={ renderNotFound() } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
