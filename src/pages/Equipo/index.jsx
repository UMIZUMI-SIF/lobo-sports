import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const EquipoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
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
            <div className="flex flex-col gap-[53px] justify-start">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[471px] w-[66%] md:w-full">
                <Text
                  className="italic md:mt-0 mt-[22px] md:text-5xl text-[70px] text-black-900 text-center"
                  size="txtArimoHebrewSubsetItalicBoldItalic70"
                >
                  EQUIPO
                </Text>
                <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[440px] w-auto">
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
                <Button className="cursor-pointer h-[45px] italic leading-[normal] text-[22px] text-center sm:text-lg md:text-xl w-[150px]">
                  EQUIPO
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-lato gap-[37px] items-end mt-[230px] md:px-10 sm:px-5 px-[331px] w-full">
          <div className="h-[234px] relative w-[93%] md:w-full">
            <div className="absolute bg-deep_purple-900 flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-11 md:px-10 px-11 sm:px-5 right-[0]">
              <Text
                className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-full"
                size="txtLatoRegular25"
              >
                Relojes Deportivos Digitales, Relojes Para Niños Función De
                Retroiluminación LED Con Función De Cronómetro Para Niños Para
                Deportes Al Aire Libre ANGGREK AC1510
              </Text>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[35%]"
              style={{ backgroundImage: "url('images/img_group58.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[234px] items-center justify-start p-3 w-full"
                style={{ backgroundImage: "url('images/img_group21.svg')" }}
              >
                <Img
                  className="h-52 md:h-auto object-cover w-[59%]"
                  src="images/img_image18_208x185.png"
                  alt="imageEighteen"
                />
              </div>
            </div>
          </div>
          <div className="md:h-[233px] h-[234px] relative w-[93%] md:w-full">
            <div className="absolute flex inset-[0] justify-center m-auto w-full">
              <div className="bg-deep_purple-900 flex flex-col items-center justify-end my-auto pt-[45px] md:px-10 sm:px-5 px-[45px]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-full"
                  size="txtLatoRegular25"
                >
                  Relojes Deportivos Digitales, Relojes Para Niños Función De
                  Retroiluminación LED Con Función De Cronómetro Para Niños Para
                  Deportes Al Aire Libre ANGGREK AC1510
                </Text>
              </div>
              <Img
                className="h-[139px] ml-[-3px] z-[1]"
                src="images/img_group58.svg"
                alt="groupNine"
              />
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-3.5 right-[0] w-[35%]"
              style={{ backgroundImage: "url('images/img_group21.svg')" }}
            >
              <Img
                className="h-[205px] md:h-auto object-cover w-[65%]"
                src="images/img_image19_205x201.png"
                alt="imageNineteen"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter h-[277px] md:h-auto items-center justify-between mt-[861px] px-28 md:px-5 py-16 w-full" />
      </div>
    </>
  );
};

export default EquipoPage;
