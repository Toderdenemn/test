import NavScroll from "./navbar";
import MainSearch from "./search";
import TableExample from "./table";
import "./auth.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <NavScroll />
        <MainSearch />
        <div className=""></div>

        <TableExample />
      </div>
    </>
  );
}

export default HomePage;
