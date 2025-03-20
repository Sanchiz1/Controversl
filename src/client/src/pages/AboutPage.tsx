function AboutPage() {
  return (
    <section>
      <h1 className='title'>AI-Powered Quizzes</h1>
      <p className='mb-6'>Generate engaging and thought-provoking quizzes using advanced AI models.</p>
      <h1 className='title'>Quiz Themes</h1>
      <p className='mb-6'>Create quizzes based on specific themes or topics. Whether it's science,
        history, or pop culture, Controversl has you covered.</p>
      <h1 className='title'>Detailed Explanations</h1>
      <p className='mb-12'>Every question comes with a concise explanation, helping learn something new with each answer.</p>
      <p className='mb-6'>The app uses Gemini API to generate quizzes dynamically, either randomly or based on a selected theme.</p>
    </section>
  );
}

export default AboutPage;