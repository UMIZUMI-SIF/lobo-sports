import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const HombrePage = () => {
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[457px] w-[67%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-4 md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    HOMBRE
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[422px] w-auto">
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
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                    HOMBRE
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer h-11 italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                    onClick={() => navigate("/infantil")}
                  >
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start max-w-[1365px] mt-[47px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[17px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto object-cover w-3/5"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-4 w-[66%] md:w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-0.5 w-[86%] md:w-full">
                <Img
                  className="h-[200px] md:h-auto object-cover"
                  src="images/img_image17.png"
                  alt="imageSeventeen"
                />
                <Img
                  className="h-[200px] md:h-auto object-cover"
                  src="images/img_image21.png"
                  alt="imageTwentyOne"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between max-w-[1140px] mt-[22px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA MODERNA
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CONJUNTO DEPORTIVO
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              PANTS DEPORTIVOS
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1365px] mt-[52px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-4 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[66%]"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[65px] p-4 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[44%]"
                src="images/img_image22.png"
                alt="imageTwentyTwo"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[71px] p-4 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[200px] md:h-auto mb-0.5 object-cover w-[56%]"
                src="images/img_image19.png"
                alt="imageNineteen"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between max-w-[1140px] mt-[39px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA MODERNA
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA SIN MANGAS
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              PANTS DEPORTIVOS
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1357px] mt-[95px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-start justify-end p-[17px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[198px] md:h-auto md:ml-[0] ml-[30px] mt-0.5 object-cover w-[77%]"
                src="images/img_image64.png"
                alt="imageSixtyFour"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-start justify-end md:ml-[0] ml-[65px] p-[25px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[181px] md:h-auto md:ml-[0] ml-[42px] mt-[3px] object-cover w-[71%]"
                src="images/img_image65.png"
                alt="imageSixtyFive"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-start justify-end md:ml-[0] ml-[71px] p-[7px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[190px] md:h-auto md:ml-[0] ml-[71px] mt-[30px] object-cover w-[59%]"
                src="images/img_image66.png"
                alt="imageSixtySix"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[1186px] mt-[51px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CALZADO PARA ENTRENAR
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CALZADO PARA CORRER
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CALZADO PARA PRESUMIR
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1360px] mt-[68px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-start justify-start p-[19px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[194px] md:h-auto mb-0.5 md:ml-[0] ml-[76px] object-cover w-[54%]"
                src="images/img_image67.png"
                alt="imageSixtySeven"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[65px] p-[5px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[223px] md:h-auto object-cover w-[63%]"
                src="images/img_image68.png"
                alt="imageSixtyEight"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[71px] p-[11px] w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[212px] md:h-auto object-cover w-[38%]"
                src="images/img_image69.png"
                alt="imageSixtyNine"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[87px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default HombrePage;
