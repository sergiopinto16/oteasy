import './App.css';

import { Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";

import Layout from "./components/Layout";
import IndexPage from "./pages/Post/IndexPage";

import LoginPage from "./pages/Account/LoginPage";
import RegisterPage from "./pages/Account/RegisterPage";
import ConfirmPage from './pages/Account/ConfirmPage';

import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/Post/CreatePost";
import PostPage from "./pages/Post/PostPage";
import EditPost from "./pages/Post/EditPost";
import SpmCasa from './pages/Spm/SpmCasa';
import SpmEscola from './pages/Spm/SpmEscola';
import SpmpCasa from './pages/Spm/SpmpCasa';
import SpmpEscola from './pages/Spm/SpmpEscola';
import NotFound from './pages/404';

import GasReportForm from './pages/Car/GasReportForm'
import GasReportIndex from './pages/Car/IndexPage'

import ClientRegister from './pages/ClientAccount/RegisterPage'
import Clients from './pages/ClientAccount/IndexPage'



function App() {

  return (

    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/confirm/:id" element={<ConfirmPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/spm/spm-casa" element={<SpmCasa />} />
          <Route path="/spm/spm-escola" element={<SpmEscola />} />
          <Route path="/spm/spm-pcasa" element={<SpmpCasa />} />
          <Route path="/spm/spm-pescola" element={<SpmpEscola />} />
          {/* Gas Report */}
          <Route path="/gas/add" element={<GasReportForm />} />
          <Route path="/gas/gasReports" element={<GasReportIndex />} />
          <Route path="/client/register" element={<ClientRegister />}> </Route>
          <Route path="/client/clients" element={<Clients />}> </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
