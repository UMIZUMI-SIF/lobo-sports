import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]" };
const variants = {
  fill: { gray_900: "bg-gray-900 text-white-A700_02" },
  outline: {
    deep_orange_A400:
      "border border-deep_orange-A400 border-solid text-deep_orange-A400",
    gray_900: "border border-gray-900 border-solid text-gray-900",
  },
};
const sizes = { xs: "p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "outline",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900", "deep_orange_A400"]),
};

export { Button };
