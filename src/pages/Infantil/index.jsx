import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const InfantilPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[53px] items-end justify-start p-[13px] w-full"
            style={{ backgroundImage: "url('images/img_group5.png')" }}
          >
            <Text
              className="mb-1 mr-[677px] text-center text-lg text-white-A700"
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[440px] w-[69%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-4 md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    INFANTIL
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[415px] w-auto">
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
                  <Button className="cursor-pointer h-11 italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    INFANTIL
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/ropa")}
                  >
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
          <div className="flex sm:flex-col flex-row font-arimohebrewsubsetitalic gap-[25px] items-start justify-start mt-[55px] md:px-5 w-auto sm:w-full">
            <Button
              className="cursor-pointer h-10 italic leading-[normal] text-center text-xl w-[125px]"
              color="deep_orange_A400"
            >
              ROPA
            </Button>
            <Button
              className="cursor-pointer h-10 italic leading-[normal] text-center text-xl w-[125px]"
              color="deep_orange_A400"
            >
              CALZADO
            </Button>
            <Button
              className="cursor-pointer h-10 italic leading-[normal] text-center text-xl w-[125px]"
              color="deep_orange_A400"
            >
              EQUIPO
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-[54px] items-center justify-center max-w-[1127px] mt-[55px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-end p-4 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[201px] md:h-auto object-cover w-[51%]"
                src="images/img_image70.png"
                alt="imageSeventy"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-end p-[17px] w-[66%] md:w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-1 w-[82%] md:w-full">
                <Img
                  className="h-48 md:h-auto object-cover"
                  src="images/img_image71.png"
                  alt="imageSeventyOne"
                />
                <Img
                  className="h-[194px] md:h-auto sm:mt-0 mt-0.5 object-cover"
                  src="images/img_image72.png"
                  alt="imageSeventyTwo"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-center mt-[52px] md:px-5 w-[57%] md:w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA MODERNA
            </Text>
            <Text
              className="md:ml-[0] ml-[204px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CONJUNTO DEPORTIVO
            </Text>
            <Text
              className="md:ml-[0] ml-[196px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              PANTS DEPORTIVOS
            </Text>
          </div>
          <List
            className="flex flex-col gap-[107px] items-center max-w-[1135px] mt-[71px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="h-[238px] relative w-[30%] md:w-full">
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
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-end p-[21px] sm:px-5 w-[30%] md:w-full"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[189px] md:h-auto mt-[3px] object-cover w-[57%]"
                  src="images/img_image74.png"
                  alt="imageSeventyFour"
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-end justify-end p-3.5 w-[30%] md:w-full"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[184px] md:h-auto mr-[27px] mt-[22px] object-cover w-[77%]"
                  src="images/img_image75.png"
                  alt="imageSeventyFive"
                />
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[23px] sm:px-5 w-[30%] md:w-full"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[187px] md:h-auto object-cover w-[76%]"
                  src="images/img_image76.png"
                  alt="imageSeventySix"
                />
              </div>
              <div className="md:h-[232px] h-[234px] relative w-[30%] md:w-full">
                <Img
                  className="h-[132px] mx-auto"
                  src="images/img_group6.svg"
                  alt="groupTwelve"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full"
                  style={{ backgroundImage: "url('images/img_group6.svg')" }}
                >
                  <div className="bg-white-A700_02 flex flex-col items-start justify-end p-[7px] w-full">
                    <Img
                      className="h-[186px] md:h-auto ml-11 md:ml-[0] object-cover w-[68%]"
                      src="images/img_image77.png"
                      alt="imageSeventySeven"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[233px] h-[234px] relative w-[30%] md:w-full">
                <Img
                  className="h-[132px] mx-auto"
                  src="images/img_group6.svg"
                  alt="groupTwelve_One"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full"
                  style={{ backgroundImage: "url('images/img_group6.svg')" }}
                >
                  <div className="bg-white-A700_02 flex flex-col items-start justify-start p-[7px] w-full">
                    <Img
                      className="h-[187px] md:h-auto md:ml-[0] ml-[33px] object-cover w-3/4"
                      src="images/img_image78.png"
                      alt="imageSeventyEight"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:mt-0 mt-[38px] p-[9px] w-[30%] md:w-full"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[216px] md:h-auto object-cover w-[64%]"
                  src="images/img_image79.png"
                  alt="imageSeventyNine"
                />
              </div>
              <div className="h-[283px] relative w-[30%] md:w-full">
                <div className="absolute bottom-[4%] md:h-[233px] h-[234px] inset-x-[0] mx-auto w-full">
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
                  className="absolute h-[283px] inset-[0] justify-center m-auto object-cover w-[283px]"
                  src="images/img_image80.png"
                  alt="imageEighty"
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:mt-0 mt-[38px] p-[26px] sm:px-5 w-[30%] md:w-full"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  className="h-[181px] md:h-auto object-cover w-[71%]"
                  src="images/img_image81.png"
                  alt="imageEightyOne"
                />
              </div>
            </div>
          </List>
          <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[63px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default InfantilPage;
