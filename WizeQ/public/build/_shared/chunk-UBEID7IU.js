import {
  useMatches
} from "/build/_shared/chunk-CA4B4QDL.js";
import {
  init_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

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
//# sourceMappingURL=/build/_shared/chunk-UBEID7IU.js.map
