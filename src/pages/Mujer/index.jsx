import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const MujerPage = () => {
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
              <div className="flex flex-col gap-[52px] justify-start">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[493px] w-[65%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-[23px] md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    MUJER
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[462px] w-auto">
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
                  <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start max-w-[1355px] mt-5 mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-end p-4 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[199px] md:h-auto mt-[3px] object-cover w-[72%]"
                src="images/img_image46.png"
                alt="imageFortySix"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-end justify-start p-[13px] w-[66%] md:w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[88px] w-[76%] md:w-full">
                <Img
                  className="h-[171px] md:h-auto sm:mt-0 mt-[26px] object-cover"
                  src="images/img_image47.png"
                  alt="imageFortySeven"
                />
                <Img
                  className="h-[207px] md:h-auto object-cover"
                  src="images/img_image48.png"
                  alt="imageFortyEight"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-center max-w-[1145px] mt-[43px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA SIN MANGAS
            </Text>
            <Text
              className="sm:ml-[0] ml-[275px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CONJUNTO DEPORTIVO
            </Text>
            <Text
              className="sm:ml-[0] ml-[275px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              PANTS DEPORTIVOS
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1355px] mt-[79px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[22px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[189px] md:h-auto object-cover w-[39%]"
                src="images/img_image49.png"
                alt="imageFortyNine"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start ml-16 md:ml-[0] p-[25px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[184px] md:h-auto object-cover w-[44%]"
                src="images/img_image50.png"
                alt="imageFifty"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[70px] p-[21px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[190px] md:h-auto mb-0.5 object-cover w-[57%]"
                src="images/img_image51.png"
                alt="imageFiftyOne"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between max-w-[1127px] mt-[43px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CAMISETA ANTI - UV
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              CHAMARRA ANTI - UV
            </Text>
            <Text
              className="text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              SHORT DEPORTIVO
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1355px] mt-[69px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[30px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[174px] md:h-auto object-cover w-[54%]"
                src="images/img_image55.png"
                alt="imageFiftyFive"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start ml-16 md:ml-[0] p-[33px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[154px] md:h-auto my-1.5 object-cover w-[98%]"
                src="images/img_image56.png"
                alt="imageFiftySix"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[70px] p-[27px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[172px] md:h-auto mb-2 object-cover w-[74%]"
                src="images/img_image57.png"
                alt="imageFiftySeven"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[1186px] mt-[52px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1355px] mt-[68px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start p-[43px] md:px-10 sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[147px] md:h-auto object-cover w-[98%]"
                src="images/img_image61.png"
                alt="imageSixtyOne"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start ml-16 md:ml-[0] p-3.5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-[203px] md:h-auto mb-[3px] object-cover w-[64%]"
                src="images/img_image62.png"
                alt="imageSixtyTwo"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[234px] items-center justify-start md:ml-[0] ml-[70px] p-[29px] sm:px-5 w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <Img
                className="h-44 md:h-auto object-cover w-[18%]"
                src="images/img_image63.png"
                alt="imageSixtyThree"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1130px] mt-[30px] mx-auto md:px-5 w-full">
            <Text
              className="sm:mt-0 mt-0.5 text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              PESAS DE 2 KG C/U
            </Text>
            <Text
              className="ml-80 sm:ml-[0] sm:mt-0 mt-0.5 text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              TAPETE DE SUELO
            </Text>
            <Text
              className="mb-0.5 sm:ml-[0] ml-[294px] text-black-900 text-center text-lg"
              size="txtInterRegular18Black900"
            >
              TERMO DE PLÁSTICO
            </Text>
          </div>
          <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[31px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default MujerPage;
