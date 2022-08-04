import * as React from 'react';

import contestdata from './contestData';

export default function ContestList() {
  return (
    <>
      <style>{`
      .contestContainer {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 28px 16px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
      }
      .contestContainer .contestItem {
        display: flex;
        justify-content: space-between;
        padding: 8px 18px;
        align-items: center;
        min-height: 100px;
      }
      .contestContainer .contestItem:nth-child(odd) {
        background-color: #F2F3F4;
        border-radius: 20px;
      }

      .contestContainer .contestItem .contestInfo .contestTitle {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .contestContainer .contestItem .contestInfo .contestTime {
        font-family: "Cascadia Code", Consolas, "Liberation Mono";
        color: #9E9E9E;
        display: flex;
        align-items: center;
      }

    `}</style>
      <div
        style={{
          width: '1000px',
          margin: 'auto',
          marginTop: '40px',
          marginBottom: '80px',
        }}
      >
        <div className="contestContainer">
          {contestdata.map((contest) => {
            return (
              <div className="contestItem">
                <div className="contestInfo">
                  <div className="contestTitle">{contest.title}</div>
                  <div className="contestTime">
                    <span style={{ marginRight: '8px' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="none"
                        version="1.1"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M12.0712,0C5.40125,0,0,5.41333,0,12.0833C0,18.7533,5.40125,24.1667,12.0712,24.1667C18.7533,24.1667,24.1667,18.7533,24.1667,12.0833C24.1667,5.41333,18.7533,0,12.0712,0ZM12.0833,21.75C6.7425,21.75,2.41667,17.4242,2.41667,12.0833C2.41667,6.7425,6.7425,2.41667,12.0833,2.41667C17.4242,2.41667,21.75,6.7425,21.75,12.0833C21.75,17.4242,17.4242,21.75,12.0833,21.75Z"
                                  fill="#A4A4A4"
                                  fill-opacity="1"
                                />
                                <path
                                  d="M12.6875,6.041656494140625L10.875,6.041656494140625L10.875,13.291656494140625L17.21875,17.097856494140625L18.125,15.611656494140625L12.6875,12.385406494140625L12.6875,6.041656494140625Z"
                                  fill="#A4A4A4"
                                  fill-opacity="1"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    {new Date(contest.from).toLocaleString()} -{' '}
                    {new Date(contest.to).toLocaleString()}
                  </div>
                </div>
                <div
                  className="contestLock"
                  style={{
                    width: '1.6em',
                    height: '1.6em',
                    padding: '12px',
                    borderRadius: '12px',
                    boxShadow: '0px 5px 10px 0px #bbb',
                    backgroundColor: '#fff',
                  }}
                >
                  {contest.public ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="1.6em"
                      height="1.6em"
                      fill="#00B578"
                    >
                      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="1.6em"
                      height="1.6em"
                      fill="#FFA116"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
