import { get_count } from './append';

export const decrypt = (msgStr, keyStr) => {
  // Early return if inputs are empty
  if (!msgStr || !keyStr) return '';

  const appendCount = get_count(keyStr);
  const msgLen = msgStr.length - 2 * appendCount;
  
  let decryptedMsg = '';

  for (let i = 0; i < msgLen; i++) {
    const val = msgStr.charCodeAt(appendCount + i) - 32;
    const k = keyStr.charCodeAt(i % keyStr.length) - 32;
    const c = 32 + ((val - k + 95) % 95);
    decryptedMsg += String.fromCharCode(c);
  }

  return decryptedMsg;
};
