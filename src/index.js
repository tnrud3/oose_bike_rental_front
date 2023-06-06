import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import BicyclePage from "./components/sub5/Bicycle/BicyclePage";
import InsertBicyclePage from "./components/sub5/Bicycle/InsertBicyclePage";
import RentalOfficePage from "./components/sub5/RentalOffice/RentalOfficePage";
import InsertRentalOfficePage from "./components/sub5/RentalOffice/InsertRentalOfficePage";
import Announcement from "./components/sub4/AnnouncementUI";
import SignUp from "./components/sub1/SignUp";
import Read from "./components/sub1/Read";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/userInqury" element={<Read />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/bicycle" element={<BicyclePage />} />
              <Route path="/bicycle/insert" element={<InsertBicyclePage/>} />
              <Route path="/rentalOffice" element={<RentalOfficePage />} />
              <Route path="/rentalOffice/insert" element={<InsertRentalOfficePage/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
