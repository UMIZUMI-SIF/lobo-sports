import React from "react";

import { Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Img
            className="sm:flex-1 h-[110px] md:h-auto object-cover w-60 sm:w-full"
            src="images/img_isologo61.png"
            alt="isologoSixtyOne"
          />
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  Download Now
                </Text>
              </div>
            </div>
            <Text
              className="text-blue_gray-100 text-sm w-auto"
              size="txtInterRegular14"
            >
              © 2021 Landify UI Kit. All rights reserved
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-44">
            <Text
              className="text-blue_gray-100 text-lg w-full"
              size="txtInterMedium18"
            >
              Get the App
            </Text>
            <Img
              className="h-10 w-[135px]"
              src="images/img_storebadge.svg"
              alt="storebadge"
            />
            <div className="h-10 relative w-[77%]">
              <div className="bg-black-900 flex flex-col h-full items-center justify-start m-auto rounded-[5px] w-full">
                <Img
                  className="h-10 rounded-tl-[5px] rounded-tr-[5px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
              </div>
              <div className="absolute flex flex-row gap-2 h-max inset-[0] items-center justify-between m-auto w-[86%]">
                <Img
                  className="h-[25px] md:h-auto object-cover"
                  src="images/img_googleplaylogo.png"
                  alt="googleplaylogo"
                />
                <Img
                  className="h-[27px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
