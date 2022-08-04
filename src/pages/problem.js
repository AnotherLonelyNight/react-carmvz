import Editor from '@monaco-editor/react';

import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from './coy';

import './katex.css'; // `rehype-katex` does not import the CSS for you
import './markdownTheme.css';

import rows from './problemData';

// Utils
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

// Button
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';

// Dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// Form
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link, useParams } from 'react-router-dom';

var md = `有 $N$ 种物品和一个容量是 $V$ 的背包。

第 $i$ 种物品最多有 $si$ 件，每件体积是 $vi$，价值是 $wi$。

求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。

输出最大价值。

### 输入格式
第一行两个整数，$N$，$V$，用空格隔开，分别表示物品种数和背包容积。
接下来有 $N$ 行，每行三个整数 $vi$,$wi$,$si$，用空格隔开，分别表示第 $i$ 种物品的体积、价值和数量。
### 输出格式
输出一个整数，表示最大价值。
### 数据范围
$0<N≤1000$
$0<V≤2000$
$0<vi,wi,si≤2000$
### 提示
本题考查多重背包的二进制优化方法。
### 输入样例
\`\`\`text
4 5
1 2 3
2 4 1
3 4 3
4 5 2
\`\`\`
### 输出样例：
\`\`\`text
10
\`\`\``;

export default function Problem() {
  const { id } = useParams();
  const problem = rows[id];

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('cpp');
  const [cursorStyle, setCursorStyle] = useState('line');

  const [mdContent, setMdContent] = useState(md);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleThemeChenge = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChenge = (event) => {
    setLanguage(event.target.value);
  };

  const handleCursorStyleChenge = (event) => {
    setCursorStyle(event.target.value);
  };

  const handleEditorChange = (event) => {
    setMdContent(event);
    console.log(event);
  };

  return (
    <div style={{ width: '1050px', margin: 'auto', marginTop: '20px' }}>
      <Breadcrumbs
        style={{ margin: '40px 0 15px 0', fontSize: '1.2rem' }}
        separator="›"
      >
        {[
          <Link to="/list" style={{ fontWeight: 'bold' }}>
            题库
          </Link>,
          <span>{problem.titleCn}</span>,
        ]}
      </Breadcrumbs>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
      >
        <ReactMarkdown
          className="markdown-content"
          children={problem.description}
          remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={coy}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img(e) {
              console.log(e);
              return <img src="" alt="cc"></img>;
            },
          }}
        />
        <ul className="info">
          <li>
            <strong>提交数</strong>
            <span>
              {problem.totalSubmit > 1000
                ? Math.round(problem.totalSubmit / 1000) + 'K'
                : problem.totalSubmit}
            </span>
          </li>
          <li>
            <strong>通过数</strong>
            <span>
              {problem.totalAccepted > 1000
                ? Math.round(problem.totalAccepted / 1000) + 'K'
                : problem.totalAccepted}
            </span>
          </li>
          <li>
            <strong>时间限制</strong>
            <span>{problem.timeLimit}</span>
          </li>
          <li>
            <strong>内存限制</strong>
            <span>{problem.memoryLimit}</span>
          </li>
          <li>
            <strong>题目难度</strong>
            <span>
              {(() => {
                if (problem.difficulty == 'HARD')
                  return (
                    <span style={{ color: 'rgb(250, 81, 81)' }}>困难</span>
                  );
                if (problem.difficulty == 'MEDIUM')
                  return (
                    <span style={{ color: 'rgb(255, 143, 31)' }}>中等</span>
                  );
                if (problem.difficulty == 'EASY')
                  return (
                    <span style={{ color: 'rgb(0, 181, 120)' }}>简单</span>
                  );
              })()}
            </span>
          </li>
          <li>
            <strong>标签</strong>
            <span>
              {problem.tags.map((i) => (
                <Chip
                  style={{ margin: '0 0 4px 4px' }}
                  label={i}
                  variant="outlined"
                  size="small"
                />
              ))}
            </span>
          </li>
        </ul>
      </div>

      <Stack
        spacing={2}
        padding="20px 0px"
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="language-label">语言</InputLabel>
          <Select
            labelId="language-label"
            id="language"
            value={language}
            onChange={handleLanguageChenge}
            label="language"
            size="small"
          >
            <MenuItem value={'cpp'}>cpp</MenuItem>
            <MenuItem value={'javascript'}>javascript</MenuItem>
          </Select>
        </FormControl>
        <IconButton color="primary" size="large" onClick={handleClickOpen}>
          <SettingsIcon />
        </IconButton>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>设置</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              默认语言
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
              size="large"
            >
              <MenuItem value={'javascript'}>javascript</MenuItem>
              <MenuItem value={'cpp'}>cpp</MenuItem>
              <MenuItem value={'python'}>python</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="theme-label">主题</InputLabel>
            <Select
              labelId="theme-label"
              id="theme"
              value={theme}
              onChange={handleThemeChenge}
              label="theme"
              size="large"
            >
              <MenuItem value={'light'}>light</MenuItem>
              <MenuItem value={'vs-dark'}>vs-dark</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
      </Dialog>
      <div
        style={{
          width: '100%',
          border: '1px solid #dadada',
          boxSizing: 'border-box',
        }}
      >
        <Editor
          height="500px" // By default, it fully fits with its parent
          theme={theme}
          language={language}
          loading={<CircularProgress />}
          onChange={handleEditorChange}
          defaultValue={md}
          options={{
            fontSize: '16',
            cursorStyle: 'block',
            minimap: {
              enabled: false,
            },
            lineNumbersMinChars: 3,
          }}
          value={''}
        />
      </div>
    </div>
  );
}
