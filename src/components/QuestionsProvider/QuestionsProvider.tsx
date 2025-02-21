import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

type QuizState = {
  queizSettings: {
    numberOfQueizs: number;
    category: string;
    difficulty: string;
  };
  questions: any[];
  score: number;
  currentQuestionIndex: number;
  totalQuestions: number;
};
const initialState: QuizState = {
  queizSettings: {
    numberOfQueizs: 0,
    category: "",
    difficulty: "",
  },
  questions: [],
  score: 0,
  currentQuestionIndex: 0,
  totalQuestions: 0,
};

console.log(initialState);
type Action =
  | { type: "SET_SETTING"; payload: QuizState["queizSettings"] }
  | { type: "SET_QUESTIONS"; payload: any[] }
  | { type: "SCORE"; payload: number }
  | { type: "NEXT_QUEZTION"; payload: number }
  | { type: "PREV_QUESTION"; payload: number };
const queizReducer = (state: QuizState, action: Action): QuizState => {
  switch (action.type) {
    case "SET_SETTING": //Setup
      return {
        ...state,
        queizSettings: action.payload,
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        totalQuestions: action.payload.length,
      };
    case "SCORE":
      return { ...state, score: state.score + 1 };
    case "NEXT_QUEZTION":
      return { ...state, currentQuestionIndex: action.payload };
    case "PREV_QUESTION":
      return { ...state, currentQuestionIndex: action.payload };

    default:
      return state;
  }
};

export const QuizContext = createContext<
  | {
      state: QuizState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(queizReducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  console.log(state);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
