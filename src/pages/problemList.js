import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';

import rows from './problemData';

var t = rows;

const tags = [
  '数组',
  '哈希表',
  '递归',
  '链表',
  '数学',
  '字符串',
  '滑动窗口',
  '二分查找',
  '分治',
  '动态规划',
  '贪心',
  '双指针',
  '排序',
  '回溯',
  '栈',
  '堆（优先队列）',
  '归并排序',
  '字符串匹配',
  '位运算',
  '矩阵',
  '单调栈',
  '模拟',
  '组合数学',
  '记忆化搜索',
  '树',
  '深度优先搜索',
  '二叉树',
  '二叉搜索树',
  '广度优先搜索',
  '并查集',
  '图',
  '字典树',
  '设计',
  '双向链表',
  '几何',
  '交互',
  '桶排序',
  '基数排序',
  '计数',
  '数据流',
  '迭代器',
  '数据库',
  '哈希函数',
  '滚动哈希',
  '枚举',
  '数论',
  '拓扑排序',
  '前缀和',
  '快速选择',
  '树状数组',
  '线段树',
  '有序集合',
  '扫描线',
  '队列',
  '单调队列',
  '计数排序',
  '脑筋急转弯',
  '博弈',
];

rows = rows.slice(0, 50);

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#666666',
    borderBottom: '2px solid rgb(240, 240, 240)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&`]: {
    border: 'none',
    padding: '10px',
  },
  [`& svg`]: {
    verticalAlign: 'middle',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(247, 248, 250)',
  },
}));

const iconComponent = (props) => {
  return <ExpandMoreIcon className={props.className} />;
};

export default function ProblemList() {
  const [perPageNum, setPerPageNum] = React.useState(20);

  React.useEffect(() => {});

  const handlePerPageNumChange = () => {};

  const renderTags = (tags) => {
    let count = 0;
    return (
      <>
        {tags.map((tag) => {
          if (count >= 2) return;
          count++;
          return (
            <Chip
              style={{ margin: '0px 2px' }}
              label={tag}
              variant="outlined"
            />
          );
        })}
      </>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '1200px',
        margin: 'auto',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          width: '900px',
          minWidth: '700px',
          flex: '1 1 auto',
          marginRight: '20px',
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">状态</StyledTableCell>
                <StyledTableCell>名称</StyledTableCell>
                <StyledTableCell align="center">难度</StyledTableCell>
                <StyledTableCell align="center">标签</StyledTableCell>
                <StyledTableCell align="center">通过率</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell align="center">
                    {(() => {
                      if (row.status == 'AC') {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="none"
                            version="1.1"
                            width="1.2em"
                            height="1.2em"
                            viewBox="0 0 24 24"
                          >
                            <clipPath id="master_svg0_63_400">
                              <rect x="0" y="0" width="24" height="24" rx="0" />
                            </clipPath>
                            <g clip-path="url(#master_svg0_63_400)">
                              <g>
                                <path
                                  d="M8.36364,16.8657L3.59091,12.16418L2,13.73134L8.36364,20L22,6.56716L20.4091,5L8.36364,16.8657Z"
                                  fill="#00B578"
                                  fill-opacity="1"
                                />
                              </g>
                            </g>
                          </svg>
                        );
                      }
                      if (row.status == 'TRIED') {
                        return (
                          <svg
                            viewBox="0 0 24 24"
                            width="1.3em"
                            height="1.3em"
                            fill="#FFC300"
                          >
                            <circle cx="9" cy="19" r="2"></circle>
                            <path d="M6.5,3L11.5,3L11,15L7,15L6.5,3Z" />
                          </svg>
                        );
                      }
                      if (row.status == 'NOT_STARTED') {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            fill="#B2B2B2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        );
                      }
                    })()}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link className="problemTitle" to={`/problem/${idx}`}>
                      {row.titleCn}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {(() => {
                      if (row.difficulty == 'HARD')
                        return (
                          <strong style={{ color: '#FA5151' }}>困难</strong>
                        );
                      if (row.difficulty == 'MEDIUM')
                        return (
                          <strong style={{ color: '#FF8F1F' }}>中等</strong>
                        );
                      if (row.difficulty == 'EASY')
                        return (
                          <strong style={{ color: '#00B578' }}>简单</strong>
                        );
                    })()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {renderTags(row.tags)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="none"
                      version="1.1"
                      width="104"
                      height="14"
                      viewBox="0 0 104 14"
                    >
                      <g>
                        <g>
                          <g>
                            <rect
                              x="2"
                              y="2"
                              width="100"
                              height="10"
                              rx="5"
                              fill="#F2F3F4"
                              fill-opacity="1"
                            />
                            <rect
                              x="1"
                              y="1"
                              width="102"
                              height="12"
                              rx="6"
                              fill-opacity="0"
                              stroke-opacity="0.3"
                              stroke="#000000"
                              stroke-width="2"
                              fill="none"
                              stroke-dasharray=""
                            />
                          </g>
                          <g>
                            <rect
                              x="2"
                              y="2"
                              width={Math.round(row.acRate * 100)}
                              height="10"
                              rx="5"
                              fill="#FFC300"
                              fill-opacity="1"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          margin="30px 0px 50px 0px"
        >
          <FormControl>
            <Select
              IconComponent={iconComponent}
              sx={{
                minWidth: '180px',
                height: '42px',
                borderRadius: '12px',
                color: '#666',
                fontFamily: 'Roboto',
                '& .MuiSelect-outlined': {
                  paddingTop: '12px',
                  paddingBottom: '12px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  display: 'none',
                },
                '&': {
                  boxShadow: '0px 5px 12px -2px rgba(0,0,0,0.14)',
                  border: 'none',
                },
              }}
              value={perPageNum}
              onChange={handlePerPageNumChange}
              MenuProps={{
                sx: {
                  '& .MuiMenu-list li': {
                    padding: '0px 16px',
                    margin: '4px 6px',
                    borderRadius: '8px',
                    minHeight: '38px',
                  },

                  '& .MuiPopover-paper': {
                    borderRadius: '12px',
                    marginTop: '6px',
                  },
                },
              }}
            >
              <MenuItem value={20} disableRipple>
                20 条/页
              </MenuItem>
              <MenuItem value={50} disableRipple>
                50 条/页
              </MenuItem>
              <MenuItem value={100} disableRipple>
                100 条/页
              </MenuItem>
            </Select>
          </FormControl>
          <Pagination count={10} shape="rounded" />
        </Stack>
      </div>
      <div style={{ width: '300px', minWidth: '200px', flex: '1 1 auto' }}>
        <div
          style={{
            width: '100%',
            minHeight: '500px',
            borderRadius: '14px',
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.06)',
            padding: '18px 0px',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '1.2em',
              margin: '0px 12px',
              color: '#666666',
              marginBottom: '10px',
            }}
          >
            标签:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0px 8px' }}>
            {tags.map((tag) => {
              return (
                <span
                  style={{
                    padding: '4px 6px',
                    borderRadius: '8px',
                    backgroundColor: '#F8F8F8',
                    marginLeft: '8px',
                    marginTop: '12px',
                    color: '#676767',
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
