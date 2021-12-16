import React from "react";
import Loader from "react-loader-spinner";

const OtherLoadingSpinner = ({
  type = "Puff",
  color = "#007aff",
  height,
  width,
  visible,
}) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      visible={visible}
    />
  );
};

export default OtherLoadingSpinner;
