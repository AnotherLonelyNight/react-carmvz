import * as React from 'react';

import statusdata from './statusData.js';

const getSubmissionStatuComp = (val) => {
  if (val === -2) {
    return (
      <strong style={{ color: '#FFC300', backgroundColor: '#FFFAEF' }}>
        编译失败
      </strong>
    );
  }
  if (val === -1) {
    return (
      <strong style={{ color: '#CC2200', backgroundColor: '#FFEAE5' }}>
        答案错误
      </strong>
    );
  }
  if (val === 0) {
    return (
      <strong style={{ color: '#407643', backgroundColor: '#DCECDC' }}>
        答案正确
      </strong>
    );
  }
  if (val === 1 || val === 2) {
    return (
      <strong style={{ color: '#CC2200', backgroundColor: '#FFEAE5' }}>
        运行超时
      </strong>
    );
  }
  if (val === 3) {
    return (
      <strong style={{ color: '#CC2200', backgroundColor: '#FFEAE5' }}>
        内存超限
      </strong>
    );
  }
  if (val === 4) {
    return (
      <strong style={{ color: '#CC2200', backgroundColor: '#FFEAE5' }}>
        运行错误
      </strong>
    );
  }
  if (val === 5) {
    return (
      <strong style={{ color: '#CC2200', backgroundColor: '#FFEAE5' }}>
        系统错误
      </strong>
    );
  }
  if (val === 6) {
    return (
      <strong style={{ color: '#008099', backgroundColor: '#E5FBFF' }}>
        正在提交
      </strong>
    );
  }
  if (val === 7) {
    return (
      <strong style={{ color: '#008099', backgroundColor: '#E5FBFF' }}>
        正在评分
      </strong>
    );
  }
  return val;
};

const timeUtil = (val) => {
  if (val == void 0) return '-';
  if (val >= 1000) return Math.round(val / 1000) + 'S';
  else return val + 'MS';
};

const memoryUtil = (val) => {
  if (val == void 0) return '-';
  if (val >= 1024 * 1024) {
    return Math.round(val / (1024 * 1024)) + 'MB';
  } else if (val >= 1024 * 1024) {
    return Math.round(val / 1024) + 'KB';
  } else return val + 'B';
};

export default function StatusList() {
  return (
    <>
      <style>{`
        .statusContainer {
          font-family: "Cascadia Code", Consolas, "Liberation Mono";
          display: flex;
          flex-direction: column;
          width: 80%;
          max-width: 1600px;
          margin: auto;
          padding: 40px;
          box-shadow: 0px 5px 20px 0px #eee;
          margin-bottom: 40px;
          margin-top: 40px;
          border-radius: 18px;
        }
        .statusContainer .statusRow {
          display: flex; 
          
          height: 2.4em;
          padding: 10px;
          align-items: center;
        }

        .statusContainer .statusRow:nth-child(odd) {
          background-color: #F2F3F4;
          border-radius: 10px;
        }

        .statusContainer .statusRow > div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .statusContainer .statusRow > div:nth-child(4) > strong {
          padding: 6px;
          border-radius: 6px;
          display: inline-block;

        }

        .statusContainer .statusRow > div > a {
          text-decoration: inherit;
          color: inherit;
        }

        .statusContainer .statusRow > div > a:hover {
          text-decoration: underline;
        }

        .statusContainer .statusHeader {
          display: flex; 
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 16px;
          color: #666666;
        }

        .statusContainer .statusHeader > div {
          border-right: 1px solid #D8D8D8;
        }

        .statusContainer .statusHeader > div:last-child {
          border-right: none;
        }
      `}</style>
      <div className="statusContainer">
        <div className="statusHeader">
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '180px',
              width: '220px',
              textAlign: 'center',
            }}
          >
            提交时间
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '120px',
              width: '160px',
              textAlign: 'left',
              textAlign: 'center',
            }}
          >
            ID
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '120px',
              width: '160px',
              textAlign: 'center',
            }}
          >
            问题
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '70px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            状态
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '60px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            时间
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '60px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            内存
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '60px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            语言
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '60px',
              width: '160px',
              textAlign: 'center',
            }}
          >
            用户
          </div>
        </div>
        {statusdata.map((i) => (
          <div className="statusRow">
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '180px',
                width: '220px',
                textAlign: 'center',
              }}
            >
              {i.create_time}
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '140px',
                width: '160px',
                textAlign: 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <a href="#">{i.id}</a>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '120px',
                width: '160px',
                textAlign: 'center',
              }}
            >
              <a href="#">{i.problem}</a>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '60px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              {getSubmissionStatuComp(i.result)}
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '60px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              {timeUtil(i.statistic_info?.time_cost)}
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '60px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              {memoryUtil(i.statistic_info?.memory_cost)}
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '60px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              {i.language}
            </div>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: '60px',
                width: '160px',
                textAlign: 'center',
              }}
            >
              <a href="#">{i.username}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
