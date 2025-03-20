import { AnsweredQuestion } from "../../types/AnsweredQuestion";
import ExplanationCard from "./ExplanationCard";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ExplanationCard> = {
  component: ExplanationCard,
  decorators: [
    (Story) => (
      <div style={
        { 
          color: 'oklch(83.54% 0 264)',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }}>
        <Story />
      </div>
    ),
  ]
};

export default meta;
type Story = StoryObj<typeof ExplanationCard>;

const exampleAnswerTrue: AnsweredQuestion = {
  question: "The Eiffel Tower can grow up to 6 inches taller during the summer due to thermal expansion.",
  correctAnswer: "True",
  answer: "True",
  explanation: "Heat causes the iron in the Eiffel Tower to expand, increasing its height by a few inches.",
};

export const CorrectAnswer: Story = {
  args: {
    answer: exampleAnswerTrue,
  },
};

export const IncorrectAnswer: Story = {
  args: {
    answer: { ...exampleAnswerTrue, answer: "False" },
  },
};

export const NoExplanation: Story = {
  args: {
    answer: { ...exampleAnswerTrue, explanation: "" },
  },
};