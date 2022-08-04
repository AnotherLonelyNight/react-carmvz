import * as React from 'react';

import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  Outlet,
  NavLink,
  useParams,
  useLocation,
} from 'react-router-dom';

import axios from './axios';

import StatusList from './pages/statusList';
import RankList from './pages/rankList';

var submissions = [];

const Header = () => {
  const handleLogin = () => {
    axios.get('/islogin').then((response) => 1);
  };

  return (
    <div style={{ display: 'flex' }}>
      <style>
        {`
          .active {
            color: red;
          }
        `}
      </style>
      <NavLink style={{ margin: '0px 10px' }} to="/">
        主页
      </NavLink>
      <NavLink style={{ margin: '0px 10px' }} to="/problems">
        题库
      </NavLink>
      <NavLink style={{ margin: '0px 10px' }} to="/contest">
        比赛
      </NavLink>
      <NavLink style={{ margin: '0px 10px' }} to="/status">
        状态
      </NavLink>
      <NavLink style={{ margin: '0px 10px' }} to="/rank">
        排名
      </NavLink>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <Outlet />
    </React.Fragment>
  );
};

const Home = () => <div>公告</div>;
const List = () => {
  let [problemList, setProblemList] = React.useState([]);

  React.useEffect(() => {
    console.log('List Effect!');
    axios
      .get('/contentProblems')
      .then((response) => setProblemList(response.data));
  }, []);

  return (
    <>
      {problemList.map((i, idx) => (
        <div key={idx}>
          <Link to={`/problems/${idx}`}>{i.titleCn}</Link>
        </div>
      ))}
    </>
  );
};
const Problem = () => {
  const { id } = useParams();
  let [problem, setProblem] = React.useState(null);

  React.useEffect(() => {
    console.log('Problem Effect!');
    axios
      .get('/problems', { params: { problemId: id } })
      .then((response) => setProblem(response.data));
  }, []);

  return (
    <div>
      <div>{problem?.description}</div>
      <div>{problem?.titleCn}</div>
      <Link to="/problems">List</Link>
    </div>
  );
};
const ContestList = () => {
  let [contestList, setContestList] = React.useState([]);

  React.useEffect(() => {
    console.log('Contest Effect!');
    axios
      .get('/contests', { params: { offset: 0, limit: 20 } })
      .then((response) => setContestList(response.data));
  }, []);

  return (
    <ul>
      {contestList.map((i) => (
        <li>
          <Link to={`/contest/${i.id}`}>{i.title}</Link>
        </li>
      ))}
    </ul>
  );
};
const Rank = () => <div>排名</div>;

const Submissions = () => {
  let params = useParams();

  return <div>{JSON.stringify(params)}</div>;
};

const ContestInfo = () => {
  const { contestId } = useParams();
  let [contestInfo, setContestInfo] = React.useState([]);

  React.useEffect(() => {
    console.log('Contest Effect!');
    axios
      .get('/contests', { params: { contestId: contestId } })
      .then((response) => setContestInfo(response.data));
  }, []);

  return (
    <div>
      {JSON.stringify(contestInfo)}
      {contestInfo?.description?.split('\n').map((i) => (
        <p>{i}</p>
      ))}
      <div style={{ display: 'flex' }}>
        <Link style={{ marginRight: '6px' }} to={`/contest/${contestId}`}>
          问题列表
        </Link>
        <Link
          style={{ marginRight: '6px' }}
          to={`/contest/${contestId}/submissions`}
        >
          问题列表
        </Link>
        <Link style={{ marginRight: '6px' }} to={`/contest/${contestId}/rank`}>
          排名
        </Link>
      </div>
      <ul>
        {contestInfo?.problems?.map((i, idx) => (
          <li>
            <Link to={`/contest/${contestId}/problems/${idx}`}>
              {i?.titleCn}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContestProblem = () => {
  let params = useParams();

  return <div>{JSON.stringify(params)}</div>;
};

const ContestRank = () => {
  let params = useParams();

  return <div>{JSON.stringify(params)}</div>;
};

export default function Demo122() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<List />} />
          <Route path="problems/:id" element={<Problem />} />
          <Route path="contest" element={<ContestList />} />
          <Route path="contest/:contestId" element={<ContestInfo />} />
          <Route
            path="contest/:contestId/submissions"
            element={<Submissions />}
          />
          <Route path="contest/:contestId/rank" element={<ContestRank />} />
          <Route
            path="contest/:contestId/problems/:contestProblemId"
            element={<ContestProblem />}
          />
          <Route path="status" element={<StatusList />} />
          <Route path="rank" element={<RankList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
