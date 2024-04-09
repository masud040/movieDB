import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MovieLayout = ({ Component, params, children, modal }) => {
  return (
    <div>
      {modal}
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar lang={params.lang} />
          {children}
        </div>
      </main>{" "}
    </div>
  );
};

export default MovieLayout;
