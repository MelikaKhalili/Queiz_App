import { Input, Select } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import IconStart from "../../assets/images/IconStart.png";
import IconDarkMode from "../../assets/svgs/IconDarkMode.svg";
import { ThemeContext } from "../../components/DarkProvider/DarkProvider";
import { MyContext } from "../../components/ModalProvider/ModalProvider";
import { QuizContext } from "../../components/QuestionsProvider/QuestionsProvider";
import GreenWaveBackGround from "../../components/base/greenWaveBackGround/greenWaveBackGround";
import { fetchQuestions, GetCategory } from "../../services/getDataSetup";
import "./Setup.css";

export default function Setup() {
  //States:
  const { isLightMode, setIsLightMode } = useContext<any>(ThemeContext);
  const navigate = useNavigate();
  const { setOpenModal } = useContext<any>(MyContext);
  const [countQueiz, setCountQueiz] = useState(""); //سوالات انتخابی کاربر
  const [categories, setcategories] = useState<any>([]); //ذخیره دسته بندی ها
  const [difficulty, setDifficulty] = useState(
    ["Easy", "Medium", "Hard"].map((item) => item.toLocaleLowerCase())
  ); //ذخیره سطح سختی
  const [selectDifficulty, setSelectDifficulty] = useState(""); //برای ذخیره مقادیر که توسط کاربر انتخاب میشه
  const [selectCategories, setSelectCategories] = useState<string>(""); //برای ذخیره مقادیری که کاربر انتخابشون میکنه
  console.log(countQueiz);
  console.log(categories);
  console.log(difficulty);
  const QUESTIONS_REGEX_COUNT = /^(?![5-9][0-9]|[1-9][0-9]{2,})\d{1,2}$/;
  const CATEGOTYANDDEFFICULTY = /^(?!\s*$).+/;

  const { dispatch } = useContext<any>(QuizContext);
  useEffect(() => {
    GetCategory().then((res) => setcategories(res));
  }, []);
  const handelDarkMode = () => {
    setIsLightMode(!isLightMode);
  };
  const queizSettings = {
    numberOfQueizs: parseInt(countQueiz),
    category: selectCategories,
    difficulty: selectDifficulty,
  }; //آبجکت تنظیمات آزمون
  const handelOpenModal = (e: any) => {
    e.preventDefault(e);
    let isValid = true;
    if (!QUESTIONS_REGEX_COUNT.test(countQueiz)) {
      toast.error("Your chosen number must be between 0 and 50", {
        position: "top-right",
      });
      isValid = false;
    }
    if (!CATEGOTYANDDEFFICULTY.test(selectCategories)) {
      toast.error("You must select an Categories option"),
        {
          position: "top-right",
        };
      isValid = false;
    }
    if (!CATEGOTYANDDEFFICULTY.test(selectDifficulty)) {
      toast.error("You must select an Difficulty option"),
        {
          position: "top-right",
        };
      isValid = false;
    }
    if (isValid) {
      // dispatch({ type: "SET_SETTING", payload: queizSettings });
      fetchQuestions({ countQueiz, selectCategories, selectDifficulty }) //سوالات رو بر اساس تنظیمات کاربر دریافت میکند
        .then((res) => {
          dispatch({ type: "SET_QUESTIONS", payload: res.results });
          console.log(res); //کنسول از resخالی صرفا هم دیتاهایی که من میخوام و میگیره هم وضعیت کار و status
        })
        .finally(() => {
          Swal.fire({
            text: "Let's go 😍🫀",
            showConfirmButton: false,
            background: " #93C572",
            color: "white",
            timer: 2000,
          }).then(() => {
            navigate("/questions");
            console.log(queizSettings);
          });
        });
    } else {
      setOpenModal(false);
    }
  };
  return (
    <div
      className={
        "dark w-screen h-screen overflow-hidden  flex justify-center items-center"
      }
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <GreenWaveBackGround className="flex justify-center items-center w-screen" />
      (
      <motion.div
        initial={{ rotateX: 90, rotateY: 180, scale: 0 }}
        animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute z-10 w-[60%] h-[70%] rounded-2xl border-4 border-white ${
          isLightMode ? "bg-green-300" : "Background"
        }`}
      >
        <div>
          <div className="flex justify-center items-center flex-col gap-1 ">
            <h1
              className={` text-[40px] font-bold  text-stroke-green ${
                isLightMode ? "text-white" : "text-black"
              }`}
            >
              QUIZLY
            </h1>
            <p className="text-green-900 font-bold rounded-lg w-24 h-8 flex justify-center items-center wavy bg-cloud-pattern">
              Setup Quiz
            </p>
          </div>
          <div className="py-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              drag
              dragConstraints={{ left: -50, right: 50 }}
            >
              <form className="flex flex-col gap-2 backgroundBlur">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-lg font-mono text-green-950"
                    htmlFor="numberInput"
                  >
                    Number Of Question:
                  </label>
                  <Input
                    value={countQueiz}
                    onChange={(e) => setCountQueiz(e.target.value)}
                    id="numberInput"
                    type={"number"}
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
                    value={selectCategories}
                    onChange={(e) => setSelectCategories(e.target.value)}
                    placeholder="Select a Category"
                    id="CategorySelected"
                    width={"96"}
                    height={"35px"}
                    border={"2px solid #006400"}
                    _hover={{ borderColor: "2px solid #006400" }}
                    _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                    style={{ marginBottom: "0px" }}
                  >
                    {categories.map((categorie: any) => (
                      <option value={categorie.id} key={categorie.id}>
                        {categorie.name}
                      </option>
                    ))}
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
                    value={selectDifficulty}
                    onChange={(e) => setSelectDifficulty(e.target.value)}
                    id="CategorySelected"
                    width={"96"}
                    height={"35px"}
                    border={"2px solid #006400"}
                    _hover={{ borderColor: "2px solid #006400" }}
                    _focus={{ borderColor: "green.500", borderWidth: "3px" }}
                  >
                    <option value="">Select Difficulty</option>
                    {difficulty.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </Select>
                </div>
              </form>
            </motion.div>
            <button
              onClick={(e) => handelOpenModal(e)}
              className="absolute  translate-y-3 translate-x-96  "
            >
              <div
                className={` w-11 h-11 rounded-full flex justify-center items-center absolute ${
                  isLightMode ? "bg-green-900" : "bg-green-400"
                }`}
              >
                <img className="w-6 h-6" src={IconStart} alt="IconStart" />
              </div>
            </button>
            <button
              onClick={handelDarkMode}
              className={`${
                isLightMode ? "bg-green-900" : "bg-green-400"
              } w-[43px] h-[43px] rounded-full absolute top-8 right-8`}
            >
              <img
                className="translate-x-[50%] "
                src={IconDarkMode}
                alt="IconDarkMode"
              />
            </button>
          </div>
        </div>
      </motion.div>
      )
    </div>
  );
}
