import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { string, number, oneOf } from "prop-types";
import { useFonts } from "@use-expo/font";

//icomoon.ttfを読み込むを完了させるためにuseFontsが必要。@use-exro/fontをinstall。
import icomoon from "../../assets/fonts/icomoon.ttf";
import selection from "../../assets/fonts/selection.json";

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon }); //bool型が返ってくる
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);

  if (!fontLoaded) {
    return null;
  }

  return (
    <CustomIcon
      name={name}
      size={size}
      color={color}
      style={{ lineHeight: size - 1 }}
    />
  );
}

Icon.propTypes = {
  name: oneOf(["plus", "delete", "pencil", "check"]).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: "#000000",
};
