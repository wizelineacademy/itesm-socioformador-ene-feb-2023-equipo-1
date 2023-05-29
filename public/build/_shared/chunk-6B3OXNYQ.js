import {
  require_prop_types
} from "/build/_shared/chunk-2VQ64DF4.js";
import {
  Ce,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/components/Atoms/UserImage/UserImage.jsx
init_react();
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/components/Atoms/UserImage/UserImage.Styled.jsx
init_react();
var Container = styled_components_browser_esm_default.div`
  border: 1px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;
  height: 32px;
  min-width: 32px;
  width: fit-content;
  ${(props) => props.size === "small" && Ce`
    height: 20px;
    min-width: 20px;
  `}
  ${(props) => props.size === "big" && Ce`
    height: 46px;
    min-width: 46px;
  `}
  ${(props) => props.size === "extra big" && Ce`
    min-height: 100px;
    min-width: 100px;
  `}
  ${(props) => props.customSize && Ce`
    min-height: ${props.customSize};
    min-width: ${props.customSize};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Image = styled_components_browser_esm_default.img`
  height: 100%;
  width: auto;
`;

// app/images/placeholder_user_img.png
var placeholder_user_img_default = "/build/_assets/placeholder_user_img-ZWAQNLBE.png";

// app/components/Atoms/UserImage/UserImage.jsx
function UserImage({
  src,
  alt,
  customSize,
  size
}) {
  const [imageSrc, setImageSrc] = (0, import_react.useState)(src);
  return /* @__PURE__ */ import_react.default.createElement(Container, {
    size,
    customSize
  }, /* @__PURE__ */ import_react.default.createElement(Image, {
    alt,
    onError: () => {
      if (imageSrc !== placeholder_user_img_default)
        setImageSrc(placeholder_user_img_default);
    },
    src: imageSrc
  }));
}
UserImage.propTypes = {
  src: import_prop_types.default.string.isRequired,
  alt: import_prop_types.default.string,
  size: import_prop_types.default.oneOf(["small", "medium", "big", "extra big"]),
  customSize: import_prop_types.default.string
};
UserImage.defaultProps = {
  alt: "",
  size: "medium",
  customSize: null
};
var UserImage_default = UserImage;

export {
  UserImage_default
};
//# sourceMappingURL=/build/_shared/chunk-6B3OXNYQ.js.map
