import * as React from 'react';
import Stack from '@mui/material/Stack';

import {
  Routes,
  BrowserRouter,
  Route,
  Outlet,
  NavLink,
} from 'react-router-dom';

import AnnounceList from './pages/announceList';
import ContestList from './pages/contestList';
import ProblemList from './pages/problemList1';
import Problem from './pages/problem';
import StatusList from './pages/statusList';
import RankList from './pages/rankList';

import './style.css';

const bottonStyle = {
  with: '70px',
  height: '30px',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: '16px',
};

const Header = () => {
  return (
    <div className="header">
      <Stack
        className="innerHeader"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: '1200px',
          margin: 'auto',
        }}
      >
        <Stack
          className="left-entry navBar"
          direction="row"
          justifyContent="left"
          spacing={2}
        >
          <NavLink
            onClick={() => console.log('click')}
            className="navItem"
            to="/"
          >
            主页
          </NavLink>
          <NavLink className="navItem" to="/list">
            题库
          </NavLink>
          <NavLink className="navItem" to="/contest">
            比赛
          </NavLink>
          <NavLink className="navItem" to="/status">
            状态
          </NavLink>
          <NavLink className="navItem" to="/rank">
            排名
          </NavLink>
        </Stack>
        <Stack
          className="right-entry navBar"
          direction="row"
          alignItems="center"
          justifyContent="left"
          spacing={1}
        >
          <span
            style={{
              color: '#666',
              padding: '2px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgb(246, 246, 246)',
            }}
          >
            登录
          </span>
        </Stack>
      </Stack>
    </div>
  );
};

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const Home = () => <AnnounceList />;

const Contest = () => <div></div>;
const Rank = () => <div></div>;

export default function DefaultProps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<ProblemList />} />
          <Route path="problem/:id" element={<Problem />} />
          <Route path="contest" element={<ContestList />} />
          <Route path="status" element={<StatusList />} />
          <Route path="rank" element={<RankList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
