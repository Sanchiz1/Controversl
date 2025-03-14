import { AnsweredQuestion } from "../../types/AnsweredQuestion";

type Props = {
  answer: AnsweredQuestion,
}

function AnswerCard({ answer }: Props) {
  return (
    <article
      className="appearing inline-grid rounded-md bg-[rgb(33,35,38)] px-4 py-3 w-full">
      <div className="prose prose-sm max-w-none mt-4">
        {answer.question}
      </div>
      <div className="prose prose-sm max-w-none mt-4">
        {answer.correctAnswer}!
      </div>
      <div className="prose prose-sm max-w-none mt-4">
        {answer.explanation}
      </div>
      <div className="prose prose-sm max-w-none mt-4">
        Your answer: {answer.answer}
      </div>
    </article>
  );
};

export default AnswerCard;