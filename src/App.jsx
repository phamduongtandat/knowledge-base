
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


import PopupContainer from "./components/container/PopupContainer";
import HomeDetailPage from "./pages/HomeDetailPage";

import ShareDetailPage from "./pages/ShareDetailPage";
import RecentDetailPage from "./pages/RecentDetailPage";
import FavorDetailPage from "./pages/FavorDetailPage";
import BinDetailPage from "./pages/BinDetailPage";
import SearchPage from './pages/SearchPage';
import MarkdownPage from './pages/MarkdownPage';
import BlogHomePage from './pages/BlogHomePage';




function App() {


  return (
    <div className="bg-kb-background ">

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/:editorType/write/:parentID" element={<MarkdownPage />} />
        {/* <Route path="/wysiwyg/write/:parentID" element={<MarkdownPage />} /> */}
        <Route path="/:editorType/edit/:parentID/:id" element={<MarkdownPage />} />


        <Route
          path="/" element={<MainLayout />}
        >

          <Route index element={<HomePage />} />
          <Route path="home/content/:id" element={<HomeDetailPage />} />
          <Route path="home/content/page/:id" element={<BlogHomePage />} />
          <Route path="search/:keyWord" element={<SearchPage />} />

          <Route path="/shared-history" element={<SharedPage />} />
          <Route path="shared/content/:id" element={<ShareDetailPage />} />
          <Route path="shared/content/page/:id" element={<BlogHomePage />} />

          <Route path="/recent" element={<RecentPage />} />
          <Route path="/recent/content/:id" element={<RecentDetailPage />} />

          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/favourite/content/:id" element={<FavorDetailPage />} />

          <Route path="/bin" element={<BinPage />} />
          <Route path="/bin/content/:id" element={<BinDetailPage />} />

          <Route path="/account-list" element={<AccListPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

      </Routes>

      <PopupContainer />

    </div>
  );
}

export default App;
