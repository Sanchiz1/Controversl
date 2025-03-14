import { useEffect, useMemo, useState } from "react";
import AnswerCard from "../components/answerCard/AnswerCard";
import ExplanationCard from "../components/explanationCard/ExplanationCard";
import QuestionCard from "../components/questionCard/QuestionCard";
import { AnsweredQuestion } from "../types/AnsweredQuestion";
import { Question } from "../types/Question";

const BASE_URL = "https://localhost:5001";

function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentQuestionIndex = answeredQuestions.length;
  const displayedQuestionIndex = showExplanation ? answeredQuestions.length : answeredQuestions.length + 1;
  const isQuizComplete = currentQuestionIndex === questions.length;

  const handleAnswer = (answer: boolean) => {
    const question = questions[answeredQuestions.length];
    setAnsweredQuestions([...answeredQuestions, {
      question: question.question,
      correctAnswer: question.correctAnswer,
      answer: answer ? "True" : "False",
      explanation: question.explanation
    }]);
    setShowExplanation(true);
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${BASE_URL}/generateQuiz`);
      if (!response.ok) throw new Error("Failed to load questions");

      const data = await response.json();
      setQuestions(data as Question[]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setAnsweredQuestions([]);
    setShowExplanation(false);
    setLoading(true);
    setError(null);
    fetchQuestions();
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const score = useMemo(
    () =>
      answeredQuestions.reduce(
        (count, q) => (q.answer === q.correctAnswer ? count + 1 : count),
        0
      ),
    [answeredQuestions]
  );

  if (loading) return (
    <section>
      <p>
        Generating your quiz...
      </p>
    </section>
  );

  if (error) return (
    <section>
      <p>
        Failed to generate quiz, please try again later.
      </p>
    </section>
  );

  return (
    <>
      <section>

        {isQuizComplete && !showExplanation
          ? <p className="mb-4">Your score is {score} / {questions.length}!</p>
          : <p className="mb-4">Question {displayedQuestionIndex} / {questions.length}</p>
        }

      </section>
      <section>

        {(!isQuizComplete && !showExplanation) &&
          <QuestionCard
            question={questions[answeredQuestions.length].question}
            onTrueClick={() => handleAnswer(true)}
            onFalseClick={() => handleAnswer(false)}
          />}

        {(showExplanation) &&
          <ExplanationCard
            answer={answeredQuestions[currentQuestionIndex - 1]}
            onContinueClick={() => setShowExplanation(false)}
          />}

        {isQuizComplete && !showExplanation &&
          <><ul className="mt-6 space-y-8 text-start">
            {answeredQuestions.map(answeredQuestion =>
              <li key={answeredQuestion.question} >
                <AnswerCard answer={answeredQuestion} /></li>
            )}
          </ul>
            <h2 className="title text-accent mt-6 text-xl">
              <a className="cursor-pointer" onClick={handleTryAgain}>Try again</a>
            </h2>
          </>}

      </section>
    </>
  );
}

export default QuizPage;