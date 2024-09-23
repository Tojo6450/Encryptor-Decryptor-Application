import { get_count } from './append';

export const encrypt = (msgStr, keyStr) => {
  console.log(msgStr);
  console.log(keyStr);

  // Early return if inputs are empty
  if (!msgStr || !keyStr) return '';

  let result = '';

  // Encrypt the message
  for (let i = 0; i < msgStr.length; i++) {
    const c = msgStr.charCodeAt(i) - 32;
    const k = keyStr.charCodeAt(i % keyStr.length) - 32;
    const val = 32 + (c + k) % 95;

    result += String.fromCharCode(val);
  }

  const appendCount = get_count(keyStr);
  let concatLeft = '';
  let concatRight = '';

  // Generate random characters for left and right append
  for (let i = 0; i < appendCount; i++) {
    concatLeft += String.fromCharCode(32 + Math.floor(Math.random() * 95));
    concatRight += String.fromCharCode(32 + Math.floor(Math.random() * 95));
  }

  // Combine the results
  result = concatLeft + result + concatRight;
  console.log(result);
  return result;
};
