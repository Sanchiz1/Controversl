import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AnswerCard from '../components/answerCard/AnswerCard';
import ExplanationCard from '../components/explanationCard/ExplanationCard';
import QuestionCard from '../components/questionCard/QuestionCard';
import { fetchQuestions, fetchQuestionsByTheme } from '../features/quizSlice';
import { RootState, useAppDispatch } from '../store';
import { AnsweredQuestion } from '../types/AnsweredQuestion';

function QuizPage() {
  const dispatch = useAppDispatch();
  const { questions, loading, error } = useSelector((state: RootState) => state.quiz);

  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [theme, setTheme] = useState<string>('');

  const displayedQuestionIndex = showExplanation ? answeredQuestions.length : answeredQuestions.length + 1;
  const isQuizComplete = answeredQuestions.length === questions.length && !showExplanation;

  const handleAnswer = (answer: boolean) => {
    const question = questions[answeredQuestions.length];
    setAnsweredQuestions((prev) => [
      ...prev,
      {
        question: question.question,
        correctAnswer: question.correctAnswer,
        answer: answer ? "True" : "False",
        explanation: question.explanation,
      },
    ]);
    setShowExplanation(true);
  };

  const handleStartQuizByTheme = () => {
    if (theme.trim().length === 0) {
      return;
    }

    setAnsweredQuestions([]);
    setShowExplanation(false);
    dispatch(fetchQuestionsByTheme(theme));
  };

  const handleStartQuiz = () => {
    setAnsweredQuestions([]);
    setShowExplanation(false);
    dispatch(fetchQuestions());
  };

  const handleTryAgain = () =>
    theme.trim().length ?
      handleStartQuizByTheme() :
      handleStartQuiz();

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
      <p>Generating your quiz...</p>
    </section>
  );

  if (error) return (
    <section>
      <p>Failed to generate quiz, please try again later.</p>
    </section>
  );

  return (
    <>
      {(!questions.length || isQuizComplete) && (
        <section>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              maxLength={50}
              placeholder="Write your theme..."
              className="block min-w-0 py-1.5 pr-3 pl-1 text-base border rounded-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
            <a className="cursor-pointer text-accent text-xl" onClick={handleStartQuizByTheme}>
              Start quiz
            </a>
          </div>
          <h2 className="title text-accent mt-4 text-sm">
            <a className="cursor-pointer" onClick={handleStartQuiz}>Generate with no theme</a>
          </h2>
        </section>
      )}

      <section>
        {questions.length > 0 && (isQuizComplete
          ? <p className="mt-4 mb-4">Your score is {score} / {questions.length}!</p>
          : <p className="mt-4 mb-4">Question {displayedQuestionIndex} / {questions.length}</p>)}
      </section>

      <section>
        {questions.length > 0 && (isQuizComplete ? (
          <>
            <ul className="mt-4 space-y-4 text-start">
              {answeredQuestions.map(answeredQuestion =>
                <li key={answeredQuestion.question}>
                  <AnswerCard answer={answeredQuestion} />
                </li>
              )}
            </ul>
            <h2 className="title text-accent mt-4 text-xl">
              <a className="cursor-pointer" onClick={handleTryAgain}>Try again</a>
            </h2>
          </>
        ) : showExplanation
          ? <ExplanationCard
            answer={answeredQuestions[answeredQuestions.length - 1]}
            onContinueClick={() => setShowExplanation(false)}
          />
          : <QuestionCard
            question={questions[answeredQuestions.length].question}
            onTrueClick={() => handleAnswer(true)}
            onFalseClick={() => handleAnswer(false)}
          />
        )}
      </section>
    </>
  );
}

export default QuizPage;
