'use server';

export async function submitFeedback(formData: FormData) {
  const message = formData.get('message');
  
  // Имитация задержки базы данных
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log('Получено на сервере:', message);
  return { success: true, message: `Сообщение "${message}" успешно сохранено!` };
}
