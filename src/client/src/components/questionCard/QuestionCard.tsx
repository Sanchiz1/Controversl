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
        <button
          onClick={onTrueClick}
          className="cursor-pointer rounded-md bg-zinc-700 p-2 font-semibold">
          True
        </button>
        <button
          onClick={onFalseClick}
          className="cursor-pointer rounded-md bg-zinc-700 p-2 font-semibold">
          False
        </button>
      </div>
    </article>
  );
};

export default QuestionCard;