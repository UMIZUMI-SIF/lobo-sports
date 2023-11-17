import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";

const CarritoPage = () => {
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
              <div className="flex flex-col md:gap-10 gap-[62px] justify-start">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[460px] w-[67%] md:w-full">
                  <Text
                    className="italic md:mt-0 mt-[13px] md:text-5xl text-[70px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic70"
                  >
                    CARRITO
                  </Text>
                  <div className="flex flex-row gap-10 items-center justify-start md:ml-[0] ml-[425px] w-auto">
                    <Img
                      className="h-12 md:h-auto object-cover w-[45px]"
                      src="images/img_image2.png"
                      alt="imageTwo"
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
          <div className="flex md:flex-col flex-row font-arimohebrewsubsetitalic gap-[29px] items-center justify-start max-w-[1514px] mt-[91px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-100_01 flex md:flex-1 flex-col items-start justify-start sm:pr-5 pr-[39px] py-[39px] rounded-[10px] w-[71%] md:w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start mb-[153px] w-full">
                <div className="h-[225px] relative w-[35%] md:w-full">
                  <div className="h-[225px] m-auto w-full">
                    <Img
                      className="absolute h-[225px] inset-[0] justify-center m-auto"
                      src="images/img_group16.svg"
                      alt="groupSixteen"
                    />
                    <div className="absolute bg-blue_gray-100_01 h-[181px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <Img
                    className="absolute h-48 inset-y-[0] left-[22%] my-auto object-cover w-1/2"
                    src="images/img_image44.png"
                    alt="imageFortyFour"
                  />
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-2 w-[64%] md:w-full">
                  <Text
                    className="italic text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtArimoHebrewSubsetItalicItalic22"
                  >
                    Camiseta para hombre, de color azul, mangas para hacer
                    ejercicio
                  </Text>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[9px] mt-[18px] w-[46%] md:w-full">
                    <Text
                      className="italic text-[15px] text-center text-gray-900 underline"
                      size="txtArimoHebrewSubsetItalicBoldItalic15"
                    >
                      Eliminar
                    </Text>
                    <Text
                      className="italic ml-7 text-[15px] text-center text-gray-900 underline"
                      size="txtArimoHebrewSubsetItalicBoldItalic15"
                    >
                      Guardar
                    </Text>
                    <Text
                      className="italic ml-[34px] text-[15px] text-center text-gray-900 underline"
                      size="txtArimoHebrewSubsetItalicBoldItalic15"
                    >
                      Comprar ahora
                    </Text>
                  </div>
                  <Text
                    className="italic md:ml-[0] ml-[499px] mt-[88px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtArimoHebrewSubsetItalicBoldItalic35"
                  >
                    $ 424.87
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-100_01 flex md:flex-1 flex-col items-center justify-start py-6 rounded-[10px] w-[28%] md:w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start mb-4 w-full">
                <Text
                  className="italic ml-11 md:ml-[0] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                  size="txtArimoHebrewSubsetItalicBoldItalic26"
                >
                  Compras
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
                <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] w-[74%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="italic mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicItalic22"
                    >
                      Productos (2)
                    </Text>
                    <Text
                      className="italic mb-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicItalic22"
                    >
                      $ 781.63
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[167px] items-center justify-start mt-5 w-[92%] md:w-full">
                    <Text
                      className="italic text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicItalic22"
                    >
                      Envió
                    </Text>
                    <Text
                      className="italic text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicItalic22"
                    >
                      Gratis
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-24 w-full">
                    <Text
                      className="italic text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicBoldItalic22"
                    >
                      TOTAL
                    </Text>
                    <Text
                      className="italic text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtArimoHebrewSubsetItalicBoldItalic22"
                    >
                      $ 781.63
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer italic leading-[normal] min-w-[209px] md:ml-[0] ml-[59px] mt-[77px] text-[19px] text-center"
                    variant="fill"
                  >
                    Comprar ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-100_01 flex flex-col font-arimohebrewsubsetitalic items-center justify-start mt-[76px] p-[31px] md:px-5 rounded-[10px] w-[63%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[130px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start">
                <div className="h-[213px] relative w-full">
                  <Img
                    className="absolute h-[213px] inset-[0] justify-center m-auto"
                    src="images/img_group16.svg"
                    alt="groupEighteen"
                  />
                  <div className="absolute bg-blue_gray-100_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3 w-full">
                    <Img
                      className="h-[138px] md:h-auto mb-4 object-cover w-[63%]"
                      src="images/img_image43.png"
                      alt="imageFortyThree"
                    />
                  </div>
                </div>
                <Text
                  className="italic sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                  size="txtArimoHebrewSubsetItalicItalic25"
                >
                  Top salmon
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start md:mt-0 mt-[30px]">
                <Text
                  className="italic text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtArimoHebrewSubsetItalicItalic22"
                >
                  Top deportivo de mujer, para hacer ejercicio
                </Text>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] w-[69%] md:w-full">
                  <Text
                    className="italic text-[15px] text-center text-gray-900 underline"
                    size="txtArimoHebrewSubsetItalicBoldItalic15"
                  >
                    Eliminar
                  </Text>
                  <Text
                    className="italic ml-7 text-[15px] text-center text-gray-900 underline"
                    size="txtArimoHebrewSubsetItalicBoldItalic15"
                  >
                    Guardar
                  </Text>
                  <Text
                    className="italic ml-[34px] text-[15px] text-center text-gray-900 underline"
                    size="txtArimoHebrewSubsetItalicBoldItalic15"
                  >
                    Comprar ahora
                  </Text>
                </div>
              </div>
              <Text
                className="italic md:mt-0 mt-[182px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                size="txtArimoHebrewSubsetItalicBoldItalic35"
              >
                $ 356.76
              </Text>
            </div>
          </div>
          <Footer1 className="bg-gray-900 flex font-inter h-[273px] md:h-auto items-center justify-between mt-[513px] px-28 md:px-5 py-16 w-full" />
        </div>
      </div>
    </>
  );
};

export default CarritoPage;
