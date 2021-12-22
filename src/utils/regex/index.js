export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i; // Почта
export const oneUppLetterRegex = /(?=.*[a-z])/; // Одна прописная буква
export const eightСharacterRegex = /[a-zA-Z0-9]{8,}/; // Не менее 8 символов
export const oneLowercaseLetterRegex = /(?=.*[A-Z])/; // Одна строчная буква
export const oneDigitRegex = /(?=.*\d)/; // Одна цифра
export const registerPassRegex = /(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/; // Пароль
