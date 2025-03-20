import Button from "../button/Button";

type Props = {
  question: string,
  onTrueClick?: () => void,
  onFalseClick?: () => void,
}

function QuestionCard({ question, onTrueClick, onFalseClick }: Props) {
  return (
    <article
      className="appearing inline-grid rounded-md bg-[rgb(33,35,38)] px-4 py-3 w-full">
      <div className="prose prose-sm max-w-none">
        {question}
      </div>
      <div className="flex justify-between mt-4 max-w-none">
        <Button label="True" variant="secondary" onClick={onTrueClick} />
        <Button label="False" variant="secondary" onClick={onFalseClick} />
      </div>
    </article>
  );
};

export default QuestionCard;