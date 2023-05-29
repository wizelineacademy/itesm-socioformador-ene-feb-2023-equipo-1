import {
  useMatches
} from "/build/_shared/chunk-3MAIR26M.js";
import {
  init_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/utils/hooks/useFindLoaderMatch.js
init_react();
function useFindLoaderMatch(id) {
  const matches = useMatches();
  const found = matches.find((route) => route.id === id);
  return found;
}
var useFindLoaderMatch_default = useFindLoaderMatch;

export {
  useFindLoaderMatch_default
};
//# sourceMappingURL=/build/_shared/chunk-NKKDRQ4D.js.map
