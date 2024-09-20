import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./logo.png")} className="App-logo" alt="logo" />
        <p className="App-title" style={{marginTop:22}}>
          盘中点评  |  盘面解读  |  每日复盘  |  精选推荐
        </p>
        <div className="App-buttonContainer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="App-download">苹果App下载</span>
          </a>
       <div className="App-downloaddiv"></div>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="App-download">安卓App下载</span>
          </a>
          </div>
      </header>
      <div className="body-div2">
        <img src={require("./jietu.png")} className="jietu" alt="logo" />
        <div className='body-div3'>
           <p className = "App-title2">
            1.全网回撤最少,只做确定性的交易
        </p>
        <p className = "App-title2">
            2.拒绝嘴炮,老师全程参与实盘
        </p>
          <p className="App-title2">
             4.注册账号免费体验半个月
           
          </p>
          <p className = "App-title2">
            3.怕跑路?怕贵?,低至20元/周
          </p>
        </div>
       </div>
      <div className="body-div">
        <div className="body-div-p">
            <p className = "App-title">
          关于复盘
          </p>
           <p className="body-div-p-s">
          炒股达人团队每天复盘至少4个小时,高强度的复盘不怕错过任何一个小行情,除了团队复盘外炒股达人会聚合互联网个平台复盘资料还结合着签约的博主复盘信息最后精选出可行的交易方案 
        </p>
        </div>
        <div className="body-div-p">
            <p className = "App-title">
          盘面解读
          </p>
           <p className="body-div-p-s">
          从大盘到题材到个股,专业盯盘团队不错过任何盘面信息,第一时间为您分析解读提出建议。每个题材和股票都有内在的操作逻辑和地位,结合着盘面分解读和分析梳理出当前最适合的交易思路
        </p>
        </div>
        <div className="body-div-p">
            <p className = "App-title">
          团队交易理念
          </p>
          <p className="body-div-p-s">
            1.只做确定性交易 

2.防守为主 先防守再进攻

3.跟随市场, 只做核心

我们认真对待每一笔交易,每一笔交易都会有内在逻辑,只有看到市场逻辑的时候我们才会出手,我们每天研究题材和市场偏好,我们更喜欢趋势票,总龙头,低位补涨票,不会关注其他杂毛。 行情不好时空仓,做减法减少犯错。你要知道做错一个票容易 当你做错亏10点时 后续要付出多大的努力才能挽回损失。所以我们先做好防守再进攻。
          </p>
         </div>

      </div>
    </div>
  );
}

export default App;
