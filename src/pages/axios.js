import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import problems from './problemData';

var mock = new MockAdapter(axios, {
  delayResponse: 100,
  onNoMatch: 'passthrough',
});

const profile = { acProblems: [] };

const contests = [
  {
    id: 'abc',
    title: 'nmgnydxzyjsxy第一次编程比赛',
    description:
      '内蒙古农业大学第一次编程比赛\n比赛过程中发现作弊一律计为0分\n如发现代码雷同本题无效。希望同学们诚信考试',
    problems: [0, 2, 3, 4],
    rank: [],
  },
  { id: 'bcd', title: 'nmgnydxzyjsxy第二次编程比赛' },
  { id: 'cde', title: 'nmgnydxzyjsxy第三次编程比赛' },
  { id: 'def', title: 'nmgnydxzyjsxy第四次编程比赛' },
];

var submissions = [];

mock.onGet('/problems').reply((config) => {
  const problemId = config?.params?.problemId;
  if (problemId) {
    let problem = problems[parseInt(problemId)];
    if (problem) return [200, problem];
    else return [404];
  }

  return [200, problems.slice(0, 20)];
});

mock.onGet('/contests').reply((config) => {
  console.log(config);
  const { offset, limit } = config?.params;
  const contestId = config?.params?.contestId;

  if (offset !== void 0 && limit !== void 0) {
    return [200, contests];
  }
  if (contestId) {
    let contest = contests.find((i) => i.id == contestId);
    let contestProblems = contest.problems;
    contest.problems = contestProblems.map((i) => problems[i]);
    console.log(contestProblems);
    return [200, contest];
  }

  return [404];
});

mock.onGet('/contentProblems').reply((config) => {
  console.log(config);
  return [200, problems.slice(0, 20)];
});

export default axios;
