import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { string, shape, func } from "prop-types";
import Icon from "./Icon";

export default function CirculeButton(props) {
  const { style, name, color, onPress } = props;

  CirculeButton.propTypes = {
    style: shape(),
    name: string.isRequired,
    onPress: func,
    color: string,
  };

  CirculeButton.defaultProps = {
    style: null,
    func: null,
    color: "#000",
  };

  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // shadow系はiOS対応
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはAndroid対応 ※重なり順、高さ
    elevation: 8,
  },
});
