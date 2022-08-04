import * as React from 'react';

import rankdata from './rankData.js';

const imgs = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F20%2F20181120233319_hpmyu.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661703984&t=e21613fd5e4a8bc3dc6adf905059a470',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-8b150568bdd56ad7003d4cc5b8554ba9_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766322&t=d3ff0ecdd9d61692200348f0e64026b5',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F28%2F20171128233205_R3khT.thumb.224_0.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766387&t=76a54c06fad20b770019d8d430890591',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F18%2F20210718201151_fca15.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766487&t=8cea094a61657ba6d9ca097e7668f737',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F522661b2b8e4fdbaec19f0c8ac7a3aa6ab476cc5.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766519&t=af58669edff50576c0ad0e3f8ec70b16',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fapi.jikipedia.com%2Fupload%2F9a10bd2e84de548368d6eb4b140b96a8_75.jpg&refer=http%3A%2F%2Fapi.jikipedia.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766580&t=c790bed2bfa6f7323e13964187d51ecb',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0502%2Fb7bae0a0j00qsghap0016d000fn00gcp.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766631&t=33a8a174f6dc7afc5a2c97e66e818245',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F25%2F20160325162240_t34Jy.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766899&t=e9b98fd738bed7ea7746f5a4fda34c10',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F20%2F20200320095915_rtadr.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766937&t=cc80c176372deb4934c29ecb949971a8',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.woyaogexing.com%2F2020%2F08%2F16%2F0d5f09d4984c4184b24d8bd317a1a59b%21400x400.jpeg&refer=http%3A%2F%2Fimg2.woyaogexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661766990&t=ab6ab2cbb07c557a969f8784c38153cd',
];

export default function StatusList() {
  return (
    <>
      <style>{`
        .statusContainer {
          font-family: "Cascadia Code", Consolas, "Liberation Mono";
          display: flex;
          flex-direction: column;
          width: 70%;
          margin: auto;
          padding: 40px;
          box-shadow: 0px 5px 20px 0px #eee;
          margin-bottom: 40px;
          margin-top: 40px;
          border-radius: 18px;
        }
        .statusContainer .statusRow {
          display: flex; 
          
          height: 3.8em;
          padding: 8px 0px;
          align-items: center;
          border-bottom: 2px solid #D8D8D8;
        }

        .statusContainer .statusRow:last-child {
          border-bottom: none;
        }

        .statusContainer > .statusRow:nth-child(2) > div:nth-child(1) {
          color: #FA5151;
          font-size: 2.2em;
        }

        .statusContainer > .statusRow:nth-child(3) > div:nth-child(1) {
          color: #FF8F1F;
          font-size: 2em;
        }

        .statusContainer > .statusRow:nth-child(4) > div:nth-child(1) {
          color: #FFC300;
          font-size: 1.8em;
        }

        .statusContainer .statusRow > div:nth-child(1) {
          flex: 1 1 auto;
          min-width: 40px;
          width: 60px;
          text-align: center;
          font-size: 1.6em;
          font-weight: bold;
          color: #777;
          font-style: italic;
        }

        .statusContainer .statusRow > div:nth-child(2) {
          flex: 1 1 auto;
          min-width: 54px;
          width: 60px;
          text-align: center;
        }

        .statusContainer .statusRow > div:nth-child(2) > img {
          height: 3.6em;
          width: 3.6em;
          object-fit: cover;
          border-radius: 50%;
        }

        .statusContainer .statusRow > div:nth-child(3) {
          flex: 1 1 auto;
          min-width: 160px;
          width: 220px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .statusContainer .statusRow > div:nth-child(4) {
          flex: 1 1 auto;
          min-width: 120px;
          width: 200px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .statusContainer .statusRow > div:nth-child(5) {
          flex: 1 1 auto;
          min-width: 40px;
          width: 80px;
          text-align: center;
        }

        .statusContainer .statusRow > div:nth-child(6) {
          flex: 1 1 auto;
          min-width: 40px;
          width: 80px;
          text-align: center;
        }

        .statusContainer .statusRow > div:nth-child(7) {
          flex: 1 1 auto;
          min-width: 120px;
          width: 200px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
          margin-bottom: 20px;
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
              minWidth: '40px',
              width: '60px',
              textAlign: 'center',
            }}
          >
            排名
          </div>
          <div
            style={{
              flex: '1 2 auto',
              minWidth: '54px',
              width: '60px',
              textAlign: 'left',
              textAlign: 'center',
            }}
          ></div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '160px',
              width: '220px',
              textAlign: 'center',
            }}
          >
            名字
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '120px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            班级
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '40px',
              width: '80px',
              textAlign: 'center',
            }}
          >
            通过数
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '40px',
              width: '80px',
              textAlign: 'center',
            }}
          >
            提交数
          </div>
          <div
            style={{
              flex: '1 1 auto',
              minWidth: '120px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            简介
          </div>
        </div>
        {rankdata.map((i, idx) => (
          <div className="statusRow">
            <div>{idx + 1}</div>
            <div style={{}}>
              <img src={imgs[Math.floor(Math.random() * 10)]} />
            </div>
            <div>
              <a href="#">{i.name}</a>
            </div>

            <div>{'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}</div>
            <div>{i.acNum}</div>
            <div>{i.total}</div>
            <div>{i.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}
