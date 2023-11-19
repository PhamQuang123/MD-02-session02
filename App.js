import "./App.css";
import Ex01 from "./components/Ex01";
import Ex02 from "./components/Ex02";
import Header from "./components/phoneStoreUi/Header";
import HomePage from "./components/phoneStoreUi/HomePage";
const number = 10;
function App() {
  // const userName = "rikkei academi";
  return (
    <div>
      {/* <h1>hello ae</h1> */}
      {/* JSX - phép nội suy */}
      {/* <p style={{ color: "red", backgroundColor: "orange" }}>
        hello {userName} {number}!!!
      </p> */}
      {/* 
       Cách sử dụng jsx

       class => className
       Đối với css:
        + Viết trực tiếp: style={{}}
        + khi backgound-color => backgoundColor
        
        Đối với sự kiện:
          +onclick => onClick
        */}
      {/* gọi components Ex01 để hiển thị ra ngoài */}
      {/* <Ex01 />
      <Ex02 /> */}
      <HomePage />
      <Header />
      fhtrjhtr
    </div>
  );
}

export default App;
