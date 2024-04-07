import Sidebar from "../components/Sidebar";

const MovieLayout = ({ children }) => {
  return (
    <main>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default MovieLayout;
