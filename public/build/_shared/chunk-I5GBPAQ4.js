import {
  useFindLoaderMatch_default
} from "/build/_shared/chunk-NKKDRQ4D.js";
import {
  init_react
} from "/build/_shared/chunk-4DA2OAD7.js";

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
//# sourceMappingURL=/build/_shared/chunk-I5GBPAQ4.js.map
