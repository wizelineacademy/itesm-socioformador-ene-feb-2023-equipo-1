import {
  useFindLoaderMatch_default
} from "/build/_shared/chunk-UBEID7IU.js";
import {
  init_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// app/utils/hooks/useUser.js
init_react();
function useUser() {
  const loader = useFindLoaderMatch_default("root");
  if (!loader || !loader.data)
    return void 0;
  return loader.data.profile;
}
var useUser_default = useUser;

export {
  useUser_default
};
//# sourceMappingURL=/build/_shared/chunk-P7BYWKM6.js.map
