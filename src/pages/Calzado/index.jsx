import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const CalzadoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start p-2 w-full"
            style={{ backgroundImage: "url('images/img_group5.png')" }}
          >
            <Text
              className="mb-[9px] mr-[682px] text-center text-lg text-white-A700"
              size="txtInterRegular18"
            >
              2X1 EN SU PRIMERA COMPRA
            </Text>
          </div>
          <div className="flex flex-col font-arimohebrewsubsetitalic items-center justify-start max-w-[1638px] mt-[15px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <Img
                className="h-[221px] md:h-auto object-cover"
                src="images/img_lobo61.png"
                alt="loboSixtyOne"
              />
              <div className="flex flex-col gap-[59px] justify-start">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[451px] w-[68%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-4 md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    CALZADO
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[418px] w-auto">
                    <Img
                      className="common-pointer h-12 md:h-auto object-cover w-[45px]"
                      src="images/img_image2.png"
                      alt="imageTwo"
                      onClick={() => navigate("/carrito")}
                    />
                    <Img
                      className="h-10 md:h-auto object-cover w-10"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                  <Img
                    className="h-[45px] ml-10 md:ml-[0] w-[45px]"
                    src="images/img_iconsgeneral.svg"
                    alt="iconsgeneral"
                  />
                </div>
                <div
                  className="common-pointer flex md:flex-col flex-row gap-7 items-end justify-start mr-[167px] w-auto md:w-full"
                  onClick={() => navigate("/")}
                >
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    INICIO
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    MUJER
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    HOMBRE
                  </Button>
                  <Button className="cursor-pointer h-11 italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    INFANTIL
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    ROPA
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    CALZADO
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    EQUIPO
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[54px] items-center justify-center max-w-[1127px] mt-[317px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[180px] md:h-auto my-1.5 object-cover w-full"
                src="images/img_image24.png"
                alt="imageTwentyFour"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-end justify-start p-[26px] sm:px-5 w-[66%] md:w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-0.5 mr-[19px] w-[88%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_image26.png"
                  alt="imageTwentySix"
                />
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_image25.png"
                  alt="imageTwentyFive"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start mt-2.5 md:px-5 w-[56%] md:w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              MIZUNO WABE RIDER 25
            </Text>
            <Text
              className="md:ml-[0] ml-[195px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              ZAPATILLAS FLEXIBLES
            </Text>
            <Text
              className="md:ml-[0] ml-[219px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              SKECHERS 198
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1127px] mt-[42px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-start justify-start p-2.5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-3.5 md:ml-[0] ml-[46px] object-cover w-[200px]"
                src="images/img_image27.png"
                alt="imageTwentySeven"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-end justify-start md:ml-[0] ml-[54px] p-[26px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[180px] md:h-auto mb-0.5 mr-[37px] object-cover w-[66%]"
                src="images/img_image28.png"
                alt="imageTwentyEight"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[59px] p-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[180px] md:h-auto mb-3.5 object-cover w-[83%]"
                src="images/img_image29.png"
                alt="imageTwentyNine"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[736px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default CalzadoPage;
