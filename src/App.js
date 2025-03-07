import "./App.css";
import Page from "./Components/Page";
import Pagination from "./Components/Pagination";

function App() {
  const data = Array.from({ length: 100 }, (_, index) => `item ${index + 1}`);
  const itemPerPage = 10;
  return (
    <div className="App">
      <h1>page components</h1>
      {/* <Pagination data={data} itemPerPage={itemPerPage} /> */}
      <Page data={data} itemPerPage={itemPerPage} />
    </div>
  );
}

export default App;
