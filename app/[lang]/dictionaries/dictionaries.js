import "server-only";
const dictionaries = {
  en: () => import("./en.json".then((module) => module.default)),
  bn: () => import("./bn.json".then((module) => module.default)),
};
export const getDictionary = async (locale) => dictionaries[locale]();

const data = {
  movies: () =>
    import("../../data/movies.json").then((module) => module.default),
};
export const getDataFile = async (type) => data[type]();
