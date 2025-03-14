import { AnsweredQuestion } from "../../types/AnsweredQuestion";

type Props = {
  answer: AnsweredQuestion,
  onContinueClick?: () => void,
}

function ExplanationCard({ answer, onContinueClick }: Props) {
  return (
    <article
      className="appearing inline-grid rounded-md bg-[rgb(33,35,38)] px-4 py-3 w-full">
      <div className="prose prose-sm max-w-none">
        {answer.answer === answer.correctAnswer ? "Correct!" : "Incorrect!"}
      </div>
      <div className="prose prose-sm max-w-none">
        {answer.explanation}
      </div>
      <div className="flex justify-between mt-4 max-w-none">
        <button
          onClick={onContinueClick}
          className="cursor-pointer rounded-md bg-zinc-700 p-2 font-semibold">
          Okay
        </button>
      </div>
    </article>
  );
};

export default ExplanationCard;