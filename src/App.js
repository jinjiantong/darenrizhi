import "./App.css";
import React from "react";
import { Nav, Layout, Card } from "@douyinfe/semi-ui";
import { IconMail, IconApps } from "@douyinfe/semi-icons";
import { IconChangelog } from "@douyinfe/semi-icons-lab";
import { Button } from "@douyinfe/semi-ui";
import { IconPhone } from "@douyinfe/semi-icons";

function App() {
  const { Footer } = Layout;

  const marginTop = {
    marginTop: "22px",
  };

  const commonStyle = {
    height: "60px",
    alignItems: "center",
    paddingTop: "10px",
    background: "var(--semi-color-fill-0)",
  };
  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <Nav
          mode={"horizontal"}
          items={[
            { itemKey: "service", text: "提供服务", icon: <IconChangelog /> },
            { itemKey: "price", text: "下载产品", icon: <IconApps /> },

            {
              text: "关于我们",
              icon: <IconMail />,
            },
          ]}
          onSelect={(key) => console.log(key)}
          header={{
            text: "炒股达人",
          }}
          footer={<span>By darenfupan</span>}
        />

        <div
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "22px",
          }}
        >
          <div>
            <div>
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 1200,
                    color: "#2CB55A",
                  }}
                >
                  炒股达人
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "var(--semi-color-text-2)",
                  }}
                >
                  5分钟帮你搞定复盘
                </p>

                {/* <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  上班族都用的炒股复盘软件
                </p>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--semi-color-text-2)",
                  }}
                >
                  5分钟复盘,上班不耽误了解股票最新行情信息
                </p> */}
              </div>
              <div>
                <Card
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    borderWidth: 0,
                    height: 180,
                  }}
                >
                  <Button
                    style={{
                      width: 160,
                      height: 50,
                      margin: 10,
                      color: "#2CB55A",
                    }}
                    onClick={() => {
                      window.location.href =
                        "https://itunes.apple.com/app/6698875237";
                    }}
                    icon={<IconPhone />}
                  >
                    {" "}
                    下载苹果应用
                  </Button>

                  <Button
                    style={{
                      width: 160,
                      height: 50,
                      color: "#2CB55A",
                      margin: 10,
                    }}
                    onClick={() => {
                      window.location.href =
                        "https://file.chaogudr.com/68l7WMNsOKhxDa0Yl82rhUXonya3MHpN/app-release.apk";
                    }}
                    icon={<IconPhone />}
                  >
                    {" "}
                    下载安卓应用
                  </Button>
                </Card>
              </div>
              <div>
                <div
                  style={{
                    display: "block",
                    rowGap: "22",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          回撤少,只做确定性交易
                        </p>
                      </div>
                      <p>
                        我们认真对待每一笔交易,每一笔交易都会有内在逻辑,只有看到市场逻辑的时候我们才会出手。
                      </p>
                    </Card>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          拒绝马后炮,老师全程实盘,复盘
                        </p>
                      </div>
                      <p>不乱推荐,推荐后负责到底,每天同步老师的实盘记录。</p>
                    </Card>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          怕跑路?怕贵?低至20元/周 (注册账号免费体验半个月)
                        </p>
                      </div>
                      <p>按周付费,试错成本低,只留符合模式内的学员。</p>
                    </Card>
                  </div> */}

                  <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          精选复盘
                        </p>
                      </div>
                      <p>
                        炒股达人团队每天复盘至少4个小时,高强度的复盘不怕错过任何一个小行情,除了团队复盘外炒股达人会聚合互联网个平台复盘资料还结合着签约的博主复盘信息最后精选出可行的交易方案
                      </p>
                    </Card>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          盘面解读
                        </p>
                      </div>
                      <p>
                        从大盘到题材到个股,专业盯盘团队不错过任何盘面信息,第一时间为您分析解读提出建议。每个题材和股票都有内在的操作逻辑和地位,结合着盘面分解读和分析梳理出当前最适合的交易思路
                      </p>
                    </Card>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <Card style={marginTop}>
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--semi-color-text-0)",
                          }}
                        >
                          财经新闻
                        </p>
                      </div>
                      <p>
                        实时分享发布最新的财经新闻,不怕任何题材发酵以及当前炒作题材。
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "ButtonHighlight",
          paddingBottom: "42px",
          paddingTop: "20px",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "20px",
            color: "var(--semi-color-text-1)",
          }}
        >
          产品截图
        </p>
        <img
          alt="fupan1"
          style={{ width: "300px", height: "652px" }}
          src="https://file.chaogudr.com/8IVzjCVHUrdo4PAdEnXfXTLBn79WgCXt/jietu1.png"
        />
        <img
          alt="fupan2"
          style={{ width: "300px", height: "652px" }}
          src="https://file.chaogudr.com/pzDwa8BET2LrrU00D5HUWU1XqBbqtlhj/jietu2.png"
        />
        <img
          alt="fupan3"
          style={{ width: "300px", height: "652px" }}
          src="https://file.chaogudr.com/yRBediARQW6MYXHFnKikcePdPpVMd6NS/jietu3.png"
        />
      </div>

      <Card style={marginTop}>
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--semi-color-text-0)",
            }}
          >
            联系方式
          </p>
        </div>
        <p>电话:+8613051202991</p>
        <p>微信:wxid_sddmipj2abdy22</p>
      </Card>

      <Layout className="components-layout-demo">
        <Footer style={commonStyle}>
          © 2021 - 2024 darenfupan. All rights reserved. 吉ICP备2024020391号-1
        </Footer>
      </Layout>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={require("./logo.png")} className="App-logo" alt="logo" /> */}

//         <p className="App-title" style={{marginTop:22}}>
//             达人复盘
//         </p>
//         <p className="App-title" style={{marginTop:22}}>
//           盘中点评  |  盘面解读  |  每日复盘  |  精选推荐
//         </p>
//         <div className="App-buttonContainer">
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className="App-download">苹果App下载</span>
//           </a>
//        <div className="App-downloaddiv"></div>
//          <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className="App-download">安卓App下载</span>
//           </a>
//           </div>
//       </header>
//       {/* <div className="body-div2">
//         <img src={require("./jietu.png")} className="jietu" alt="logo" />
//         <div className='body-div3'>
//            <p className = "App-title2">
//             1.全网回撤最少,只做确定性的交易
//         </p>
//         <p className = "App-title2">
//             2.拒绝嘴炮,老师全程参与实盘
//         </p>
//           <p className="App-title2">
//              4.注册账号免费体验半个月

//           </p>
//           <p className = "App-title2">
//             3.怕跑路?怕贵?,低至20元/周
//           </p>
//         </div>
//        </div> */}
//       <div className="body-div">
//         <div className="body-div-p">
//             <p className = "App-title">
//           关于复盘
//           </p>
//            <p className="body-div-p-s">
//           炒股达人团队每天复盘至少4个小时,高强度的复盘不怕错过任何一个小行情,除了团队复盘外炒股达人会聚合互联网个平台复盘资料还结合着签约的博主复盘信息最后精选出可行的交易方案
//         </p>
//         </div>
//         <div className="body-div-p">
//             <p className = "App-title">
//           盘面解读
//           </p>
//            <p className="body-div-p-s">
//           从大盘到题材到个股,专业盯盘团队不错过任何盘面信息,第一时间为您分析解读提出建议。每个题材和股票都有内在的操作逻辑和地位,结合着盘面分解读和分析梳理出当前最适合的交易思路
//         </p>
//         </div>
//         <div className="body-div-p">
//             <p className = "App-title">
//           团队交易理念
//           </p>
//           <p className="body-div-p-s">
//             1.只做确定性交易

// 2.防守为主 先防守再进攻

// 3.跟随市场, 只做核心

// 我们认真对待每一笔交易,每一笔交易都会有内在逻辑,只有看到市场逻辑的时候我们才会出手,我们每天研究题材和市场偏好,我们更喜欢趋势票,总龙头,低位补涨票,不会关注其他杂毛。 行情不好时空仓,做减法减少犯错。你要知道做错一个票容易 当你做错亏10点时 后续要付出多大的努力才能挽回损失。所以我们先做好防守再进攻。
//           </p>
//          </div>

//       </div>
//     </div>
//   );
// }

export default App;
