import Column2 from "./Column2";
import Column3 from "./Column3";
import Header from "./Header";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <Column2 />
        <Column3 />
      </div>
    </>
  );
}

export default Main;
