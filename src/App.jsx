import "./App.css";
import Footer from "./components/Footer";
import { Card_nirocon } from "./components/Card_nirocon";

function App() {
  return (
    <>
      {/* TODO ヘッダーを作る */}

      {/* メイン */}
      <Card_nirocon
        img_link={
          "https://raw.githubusercontent.com/nitgc-densan-club/tmp/main/no_image.jpg"
        }
        title={"テスト"}
        text={"テストテキスト"}
      />

      {/* TODO フッターを作る */}
      <Footer></Footer>
    </>
  );
}

export default App;
