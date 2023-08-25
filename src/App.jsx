import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./components/layout/MainLayout";
import SharedPage from "./pages/SharedPage";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import AccListPage from './pages/AccListPage';
import FavouritePage from './pages/FavouritePage';
import RecentPage from './pages/RecentPage';
import BinPage from './pages/BinPage';
import DetailPage from "./pages/DetailPage";
import ShareList from "./components/popup/ShareList";
import PopupContainer from "./components/container/PopupContainer";

function App() {



  return (
    <div className="bg-kb-background ">

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />


        <Route
          path="/" element={<MainLayout />}
        >
          <Route index element={<HomePage />} />
          <Route path="/home/content/:id" element={<DetailPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="/recent" element={<RecentPage />} />
          {/* <Route path="/recent/:id" element={<DetailPage />} /> */}
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/bin" element={<BinPage />} />
          <Route path="/account-list" element={<AccListPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

      </Routes>
      {false && <ShareList />}
      {/* <PopupContainer /> */}

    </div>
  );
}

export default App;
