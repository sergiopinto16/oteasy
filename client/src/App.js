import './App.css';

import { Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";

import Layout from "./components/Layout";
import IndexPage from "./pages/Post/IndexPage";
import LoginPage from "./pages/Account/LoginPage";
import RegisterPage from "./pages/Account/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/Post/CreatePost";
import PostPage from "./pages/Post/PostPage";
import EditPost from "./pages/Post/EditPost";
import SPMCasa from './pages/SPM/SPMCasa';
import SPMEscola from './pages/SPM/SPMEscola';
import SPMpCasa from './pages/SPM/SPMpCasa';
import SPMpEscola from './pages/SPM/SPMpEscola';
import NotFound from './pages/404';



function App() {

  return (



    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/spm/spm_casa" element={<SPMCasa  />} />
          <Route path="/spm/spm_escola" element={<SPMEscola />} />
          <Route path="/spm/spm_p_casa" element={<SPMpCasa />}  />
          <Route path="/spm/spm_p_escola" element={<SPMpEscola />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
