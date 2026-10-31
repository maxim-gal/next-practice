import { submitFeedback } from '../actions';
import { SubmitButton } from './SubmitButton';

export default function FeedbackPage() {
  return (
    <div>
      <h1>Обратная связь</h1>
      <p>Проверка Server Actions (ПР 1.3).</p>
      <form action={async (formData) => {
        'use server';
        const res = await submitFeedback(formData);
        console.log(res.message);
      }}>
        <textarea name="message" placeholder="Ваше сообщение..." required style={{ display: 'block', width: '300px', height: '80px' }} />
        <SubmitButton />
      </form>
    </div>
  );
}
