import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer1 from "components/Footer1";

const InicioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[51px] items-end justify-start p-[11px] w-full"
          style={{ backgroundImage: "url('images/img_group5.png')" }}
        >
          <Text
            className="mb-1.5 mr-[680px] text-center text-lg text-white-A700"
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
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[400px] w-[72%] md:w-full">
                <Text
                  className="italic md:mt-0 mt-4 md:text-5xl text-[70px] text-black-900 text-center"
                  size="txtArimoHebrewSubsetItalicBoldItalic70"
                >
                  LOBO SPORT
                </Text>
                <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[351px] w-auto">
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
              <div className="flex md:flex-col flex-row gap-7 items-center justify-start mr-[167px] w-[88%] md:w-full">
                <div
                  className="common-pointer flex md:flex-col flex-row gap-7 items-end justify-start w-auto md:w-full"
                  onClick={() => navigate("/infantil")}
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
                </div>
                <Button
                  className="common-pointer cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]"
                  onClick={() => navigate("/infantil")}
                >
                  EQUIPO
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[492px] md:h-[647px] mt-[155px] md:px-5 relative w-[58%] md:w-full">
          <Img
            className="h-[76px] ml-[429px] mt-[100px] object-cover w-[75px]"
            src="images/img_image4.png"
            alt="imageFour"
          />
          <Img
            className="absolute h-[492px] inset-[0] justify-center m-auto object-cover rounded-[9px] w-full"
            src="images/img_image7.png"
            alt="imageSeven"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-[54px] items-center justify-start max-w-[1347px] mt-[63px] mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[309px] items-center justify-start p-[29px] sm:px-5 w-[31%] md:w-full"
            style={{ backgroundImage: "url('images/img_group6.svg')" }}
          >
            <Img
              className="h-[250px] md:h-auto object-cover w-[94%]"
              src="images/img_image10.png"
              alt="imageTen"
            />
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[41px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
            orientation="horizontal"
          >
            <div className="h-[309px] relative w-full">
              <div className="absolute h-[309px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[132px] mx-auto"
                  src="images/img_group6.svg"
                  alt="groupTwelve"
                />
                <Img
                  className="absolute h-[309px] inset-[0] justify-center m-auto"
                  src="images/img_group6.svg"
                  alt="groupThirteen"
                />
              </div>
              <div className="absolute bg-white-A700_02 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[71%]"
                  src="images/img_image15.png"
                  alt="imageFifteen"
                />
              </div>
            </div>
            <div className="h-[309px] relative w-full">
              <div className="absolute h-[309px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[132px] mx-auto"
                  src="images/img_group6.svg"
                  alt="groupFourteen"
                />
                <Img
                  className="absolute h-[309px] inset-[0] justify-center m-auto"
                  src="images/img_group6.svg"
                  alt="groupFifteen"
                />
              </div>
              <div className="absolute bg-white-A700_02 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[9px] w-full">
                <Img
                  className="h-[241px] md:h-auto object-cover w-[58%]"
                  src="images/img_image16.png"
                  alt="imageSixteen"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row font-arimohebrewsubsetitalic md:gap-5 items-center justify-center mt-10 md:px-5 w-[55%] md:w-full">
          <Text
            className="italic sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            CALZADO
          </Text>
          <Text
            className="italic md:ml-[0] ml-[323px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            ROPA
          </Text>
          <Text
            className="italic md:ml-[0] ml-[308px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            ACCESORIOS
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-[26px] items-center justify-start max-w-[1379px] mt-[72px] mx-auto md:px-5 w-full">
          <div className="h-[309px] relative w-[35%] md:w-full">
            <div className="h-[309px] m-auto w-full">
              <Img
                className="absolute h-[309px] inset-[0] justify-center m-auto"
                src="images/img_group6.svg"
                alt="groupSixteen"
              />
              <div className="absolute bg-white-A700_02 h-[249px] inset-[0] justify-center m-auto w-full"></div>
            </div>
            <Img
              className="absolute h-[265px] inset-y-[0] left-[22%] my-auto object-cover w-1/2"
              src="images/img_image44.png"
              alt="imageFortyFour"
            />
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[41px] grid md:grid-cols-1 grid-cols-2 w-[64%] md:w-full"
            orientation="horizontal"
          >
            <div className="h-[309px] relative w-full">
              <Img
                className="absolute h-[309px] inset-[0] justify-center m-auto"
                src="images/img_group6.svg"
                alt="groupEighteen"
              />
              <div className="absolute bg-white-A700_02 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 w-full">
                <Img
                  className="h-[200px] md:h-auto object-cover w-[67%]"
                  src="images/img_image43.png"
                  alt="imageFortyThree"
                />
              </div>
            </div>
            <div className="h-[309px] relative w-full">
              <Img
                className="absolute h-[309px] inset-[0] justify-center m-auto"
                src="images/img_group6.svg"
                alt="groupTwenty"
              />
              <div className="absolute bg-white-A700_02 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[30px] sm:px-5 w-full">
                <Img
                  className="h-[199px] md:h-auto mr-[53px] object-cover w-[63%]"
                  src="images/img_image45.png"
                  alt="imageFortyFive"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-row font-arimohebrewsubsetitalic items-start justify-between max-w-[1063px] mt-[45px] mx-auto md:px-5 w-full">
          <Text
            className="italic mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            HOMBRE
          </Text>
          <Text
            className="italic mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            MUJER
          </Text>
          <Text
            className="italic mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
            size="txtArimoHebrewSubsetItalicItalic25"
          >
            INFANTIL
          </Text>
        </div>
        <Footer1 className="bg-gray-900 flex font-inter h-[273px] md:h-auto items-center justify-between mt-[50px] px-28 md:px-5 py-16 w-full" />
      </div>
    </>
  );
};

export default InicioPage;
