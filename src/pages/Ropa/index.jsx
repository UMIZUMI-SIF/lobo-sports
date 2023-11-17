import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const RopaPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[51px] items-end justify-start p-[11px] w-full"
            style={{ backgroundImage: "url('images/img_group5.png')" }}
          >
            <Text
              className="mb-1.5 mr-[679px] text-center text-lg text-white-A700"
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[511px] w-[64%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-4 md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    ROPA
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[483px] w-auto">
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
                <div className="flex md:flex-col flex-row gap-7 items-end justify-start mr-[167px] w-auto md:w-full">
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/")}
                  >
                    INICIO
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/mujer")}
                  >
                    MUJER
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/hombre")}
                  >
                    HOMBRE
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-11 italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/infantil")}
                  >
                    INFANTIL
                  </Button>
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    ROPA
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/calzado")}
                  >
                    CALZADO
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/equipo")}
                  >
                    EQUIPO
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[54px] items-center justify-center max-w-[1127px] mt-[188px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[17px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto object-cover w-[61%]"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-4 w-[66%] md:w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-0.5 w-[83%] md:w-full">
                <Img
                  className="h-[200px] md:h-auto object-cover"
                  src="images/img_image13.png"
                  alt="imageThirteen"
                />
                <Img
                  className="h-[200px] md:h-auto object-cover"
                  src="images/img_image21_200x164.png"
                  alt="imageTwentyOne"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start mt-2 md:px-5 w-[58%] md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA MODERNA
            </Text>
            <Text
              className="md:ml-[0] ml-[204px] md:mt-0 mt-0.5 text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA SIN MANGAS
            </Text>
            <Text
              className="mb-0.5 md:ml-[0] ml-[172px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA PARA FUTBÓL
            </Text>
          </div>
          <div className="md:gap-5 gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1143px] min-h-[auto] mt-[107px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-start p-4 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[67%]"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-start p-4 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[45%]"
                src="images/img_image22.png"
                alt="imageTwentyTwo"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-start p-4 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[64%]"
                src="images/img_image23.png"
                alt="imageTwentyThree"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-start pt-[11px] px-[11px] w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[223px] md:h-auto object-cover w-[54%]"
                src="images/img_image49.png"
                alt="imageFortyNine"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-start p-[25px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[184px] md:h-auto object-cover w-[45%]"
                src="images/img_image50.png"
                alt="imageFifty"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-end p-[19px] w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[184px] md:h-auto mt-3 object-cover w-[64%]"
                src="images/img_image51.png"
                alt="imageFiftyOne"
              />
            </div>
            <div className="h-[238px] relative w-full">
              <div className="absolute md:h-[233px] h-[234px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[132px] mx-auto"
                  src="images/img_group6.svg"
                  alt="groupTwelve"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full"
                  style={{ backgroundImage: "url('images/img_group6.svg')" }}
                >
                  <div className="bg-white-A700_02 h-[201px] w-full"></div>
                </div>
              </div>
              <Img
                className="absolute h-[238px] inset-[0] justify-center m-auto object-cover w-[237px]"
                src="images/img_image73.png"
                alt="imageSeventyThree"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-center justify-end p-[21px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[189px] md:h-auto mt-[3px] object-cover w-[57%]"
                src="images/img_image74.png"
                alt="imageSeventyFour"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[234px] items-end justify-end p-3.5 w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[184px] md:h-auto mr-[27px] mt-[22px] object-cover w-[77%]"
                src="images/img_image75.png"
                alt="imageEightyTwo"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[94px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default RopaPage;
