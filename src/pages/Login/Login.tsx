import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Swal from "sweetalert2";
import sticker from "../../assets/gift/sticker2.webp";
import IconQueiz from "../../assets/images/IconQueiz.png";
import rocket from "../../assets/images/rocket .png";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import ModalProvider, {
  MyContext,
} from "../../components/ModalProvider/ModalProvider";
import SplitText from "../../components/SplitText/SplitText";
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
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const rocketSpring = useSpring({
    transform: startAnimation ? "translateY(-600px)" : "translateY(0px)",
    config: { tension: 100, friction: 40 },
    onRest: () => {
      Swal.fire({
        html: `You are being redirected to the quiz page <div class="flex justify-center items-center pt-4"><img src="${sticker}" alt="Sticker" class="w-20 h-20 rounded-full "/></div>`,
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
    },
  });

  const handelOpenModal = () => {
    setStartAnimation(true);
  };

  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="dark w-screen h-screen overflow-hidden flex justify-center items-center custom-container">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-screen custom-background" />
      <div
        className={`absolute z-10 w-[60%]  h-[70%] rounded-2xl border-4 border-white ${
          isLightMode ? "bg-green-300" : "Background"
        } custom-main-container`}
      >
        <div className="flex justify-center items-center flex-col gap-20 py-6">
          <h1
            className={`text-[40px] font-bold text-stroke-green ${
              isLightMode ? "text-black" : "text-white"
            } custom-title`}
          >
            <SplitText className="titel" text="QUIZLY" delay={300} />
          </h1>
          <h2
            className={`font-bold text-[50px] text-stroke-green leading-2 ${
              isLightMode ? "text-black" : "text-white"
            } custom-subtitle`}
          >
            Welcome To Quiz App...
          </h2>
          <div className="flex  flex-col justify-center items-center absolute bottom-4 ">
            <div className="mb-6 ">
              <animated.img
                className="w-20 custom-rocket"
                src={rocket}
                alt="rocket"
                style={rocketSpring}
              />
            </div>
            <Button
              onClick={handelOpenModal}
              color={"green.200"}
              bg={`${isLightMode ? "green.400" : "green.900"}`}
              borderColor={`${isLightMode ? "green.400" : "green.200"}`}
              border={"4px"}
              variant={"outline"}
              size={"lg"}
            >
              <p className="text-xl font-bold">GET START</p> 🚀
            </Button>
          </div>
        </div>
        <button
          onClick={handelDarkMode}
          className={`w-[43px] h-[43px] rounded-[100%] absolute top-8 right-8 ${
            isLightMode ? "bg-green-900" : "bg-green-400"
          } custom-darkmode-button`}
        >
          <img
            className="translate-x-[50%] img-DarkMode"
            src={IconDarkMode}
            alt="IconDarkMode"
          />
        </button>
      </div>
    </div>
  );
}
