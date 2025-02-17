import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spaceship from "../../assets/gift/Spaceship.gif";
import sticker from "../../assets/gift/sticker2.webp";
import IconQueiz from "../../assets/images/IconQueiz.png";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import ModalProvider, {
  MyContext,
} from "../../components/ModalProvider/ModalProvider";
import BackGround from "../../components/base/BackGround/BackGround";
import BackGroundTheme from "../../components/base/BackGroundTheme/BackGroundTheme";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import "./Login.css";
export default function Login() {
  return (
    <ModalProvider>
      <LoginContent />
    </ModalProvider>
  );
}

function LoginContent() {
  const { setOpenModal } = useContext<any>(MyContext);
  const { isDarkMode, setIsDarkMode } = useContext<any>(ThemeContext);
  //DarkState
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();
  const handelOpenModal = () => {
    setOpenModal(true);
    Swal.fire({
      html: `You are being redirected to the quiz page <div class="flex justify-center items-center pt-4"><img src="${sticker}" alt="Sticker"
      class="w-20 h-20 rounded-full "/></div>`,
      confirmButtonColor: "#6A9A3E",
      width: "50%",
      color: "black",
      background: "#A2D09f ",
      imageUrl: IconQueiz,
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "my-confirm-button",
        cancelButton: "my-canCle-buttton",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/setup");
      }
    });
  };

  return (
    <>
      <div className="relative min-h-[100vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
        <GreenWaveBackGround className="flex justify-center items-center w-full h-screen" />

        {isDarkMode ? (
          <BackGroundTheme className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
            <div className="flex justify-center items-center flex-col gap-20 py-6">
              <h1 className="text-black text-[40px] font-bold  text-stroke-green">
                QUIZLY
              </h1>
              <h2 className="text-black font-bold text-[70px] text-stroke-green     [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)] leading-2 ">
                Welcome To Quiz App
              </h2>
              <div className="flex flex-col justify-center items-center gap-4 absolute bottom-[-130px]">
                <img className="w-14" src={Spaceship} alt="Spaceship_Gif" />
                <Button
                  onClick={handelOpenModal}
                  color={"green.900"}
                  bg={"#B5f99C"}
                  variant={"outline"}
                  size={"lg"}
                >
                  <p className="text-xl font-bold"> GET START</p> 🚀
                </Button>
              </div>
            </div>
            <div
              onClick={handelDarkMode}
              className="bg-green-400 w-[43px] h-[43px] rounded-[100%] absolute top-8 right-[-20px]"
            >
              <div className="absolute translate-x-[50%] translate-y-[50%]">
                <img src={IconDarkMode} alt="IconDarkMode" />
              </div>
            </div>
          </BackGroundTheme>
        ) : (
          <BackGround className="absolute z-10 w-[60%] h-[70%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center border-4 border-white rounded-2xl">
            <div className="flex justify-center items-center flex-col gap-20 py-6">
              <h1 className="text-white text-[40px] font-bold shadow text-stroke-green">
                QUIZLY
              </h1>
              <h2 className="text-white font-bold text-[70px] text-stroke-green">
                Welcome To Quiz App
              </h2>
              <div className="flex flex-col justify-center items-center gap-4 absolute bottom-[-130px]">
                <img className="w-14" src={Spaceship} alt="Spaceship_Gif" />
                <Button
                  onClick={handelOpenModal}
                  color={"green.900"}
                  bg={"#B5f99C"}
                  variant={"outline"}
                  size={"lg"}
                >
                  <p className="text-xl font-bold"> GET START</p> 🚀
                </Button>
              </div>
            </div>
            <div
              onClick={handelDarkMode}
              className="bg-green-700 w-[43px] h-[43px] rounded-[100%] absolute top-8 right-[-20px]"
            >
              <div className="absolute translate-x-[50%] translate-y-[50%]">
                <img src={IconDarkMode} alt="IconDarkMode" />
              </div>
            </div>
          </BackGround>
        )}
      </div>
    </>
  );
}
