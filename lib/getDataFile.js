const data = {
  movies: () =>
    import("../app/data/movies.json").then((module) => module.default),
};
export const getDataFile = async (type) => data[type]();
