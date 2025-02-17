import { Input, Select } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import IconStart from "../../assets/images/IconStart.png";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { MyContext } from "../../components/ModalProvider/ModalProvider";
import BackGround from "../../components/base/BackGround/BackGround";
import BackGroundTheme from "../../components/base/BackGroundTheme/BackGroundTheme";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import "./Setup.css";
export default function Setup() {
  //States:
  const [Count, setCount] = useState<number | string>("");
  const { isDarkMode, setIsDarkMode } = useContext<any>(ThemeContext);
  const { setOpenModal } = useContext<any>(MyContext);
  const navigate = useNavigate();

  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handelOpenModal = (e: any) => {
    setOpenModal(true);
    e.preventDefault(e);
    Swal.fire({
      text: "Let's go 😍🫀",
      showConfirmButton: false,
      background: " #93C572",
      color: "white",
      timer: 2000,
    }).then(() => {
      navigate("/questions");
    });
  };
  return (
    <div className="relative min-h-[100vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-full h-screen" />

      {isDarkMode ? (
        <BackGroundTheme className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
          <div className="flex justify-center items-center flex-col gap-1 ">
            <h1 className="text-white text-[40px] font-bold  text-stroke-green">
              QUIZLY
            </h1>
            <p className="text-green-900 font-bold rounded-lg w-24 h-8 flex justify-center items-center wavy bg-cloud-pattern">
              Setup Quiz
            </p>
          </div>
          <div className="py-4">
            <form className="flex flex-col gap-2 backgroundBlur">
              <div className="flex flex-col gap-2">
                <label
                  className="text-lg font-mono text-green-950"
                  htmlFor="numberInput"
                >
                  Number Of Question:
                </label>
                <Input
                  value={Count}
                  onChange={(e) => setCount(e.target.value)}
                  id="numberInput"
                  type="number"
                  placeholder="Choose your number of questions"
                  _placeholder={{ color: "green" }}
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  color={"green"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="CategorySelected"
                  className="text-lg font-mono text-green-950"
                >
                  Category
                </label>
                <Select
                  id="CategorySelected"
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="DifficultySelected"
                  className="text-lg font-mono text-green-950"
                >
                  Difficulty
                </label>
                <Select
                  id="CategorySelected"
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Select>
              </div>
              <button
                onClick={(e) => handelOpenModal(e)}
                className="relative translate-x-[50%] translate-y-8"
              >
                <div className="bg-green-500 w-11 h-11 rounded-full flex justify-center items-center absolute ">
                  <img className="w-6 h-6" src={IconStart} alt="IconStart" />
                </div>
              </button>
            </form>
            <div
              onClick={handelDarkMode}
              className="bg-green-700 w-[43px] h-[43px] rounded-full fixed top-8 right-8"
            >
              <div className="absolute translate-x-[50%] translate-y-[50%]">
                <img src={IconDarkMode} alt="IconDarkMode" />
              </div>
            </div>
          </div>
        </BackGroundTheme>
      ) : (
        <BackGround className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
          <div className="flex justify-center items-center flex-col gap-1 ">
            <h1 className="text-white text-[40px] font-bold shadow text-stroke-green">
              QUIZLY
            </h1>
            <p className="text-green-900 font-bold rounded-lg w-24 h-8 flex justify-center items-center wavy bg-cloud-pattern">
              Setup Quiz
            </p>
          </div>
          <div className="py-4">
            <form className="flex flex-col gap-2 backgroundBlur">
              <div className="flex flex-col gap-2">
                <label
                  className="text-lg font-mono text-green-950"
                  htmlFor="numberInput"
                >
                  Number Of Question:
                </label>
                <Input
                  value={Count}
                  onChange={(e) => setCount(e.target.value)}
                  id="numberInput"
                  type="number"
                  placeholder="Choose your number of questions"
                  _placeholder={{ color: "green" }}
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  color={"green"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="CategorySelected"
                  className="text-lg font-mono text-green-950"
                >
                  Category
                </label>
                <Select
                  id="CategorySelected"
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="DifficultySelected"
                  className="text-lg font-mono text-green-950"
                >
                  Difficulty
                </label>
                <Select
                  id="CategorySelected"
                  width={"96"}
                  height={"35px"}
                  border={"2px solid #006400"}
                  _hover={{ borderColor: "2px solid #006400" }}
                  _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Select>
              </div>
              <div className="relative translate-x-[50%] translate-y-8">
                <button
                  onClick={(e) => handelOpenModal(e)}
                  className={`bg-green-500 w-11 h-11 rounded-full flex justify-center items-center absolute transition-transform `}
                >
                  <img className="w-6 h-6" src={IconStart} alt="IconStart" />
                </button>
              </div>
            </form>
            <div
              onClick={handelDarkMode}
              className="bg-green-700 w-[43px] h-[43px] rounded-full fixed top-8 right-8"
            >
              <div className="absolute translate-x-[50%] translate-y-[50%]">
                <img src={IconDarkMode} alt="IconDarkMode" />
              </div>
            </div>
          </div>
        </BackGround>
      )}
    </div>
  );
}
