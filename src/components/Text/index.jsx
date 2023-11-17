import React from "react";

const sizeClasses = {
  txtArimoHebrewSubsetItalicBoldItalic15:
    "font-arimohebrewsubsetitalic font-bold italic",
  txtArimoHebrewSubsetItalicBoldItalic26:
    "font-arimohebrewsubsetitalic font-bold italic",
  txtInterMedium18: "font-inter font-medium",
  txtArimoHebrewSubsetItalicItalic25:
    "font-arimohebrewsubsetitalic font-normal italic",
  txtArimoHebrewSubsetItalicBoldItalic22:
    "font-arimohebrewsubsetitalic font-bold italic",
  txtArimoHebrewSubsetItalicItalic22:
    "font-arimohebrewsubsetitalic font-normal italic",
  txtArimoHebrewSubsetItalicBoldItalic35:
    "font-arimohebrewsubsetitalic font-bold italic",
  txtInterRegular18Black900: "font-inter font-normal",
  txtLatoRegular25: "font-lato font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtArimoHebrewSubsetItalicBoldItalic70:
    "font-arimohebrewsubsetitalic font-bold italic",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
