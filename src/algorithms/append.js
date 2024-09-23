const MAX_NUM_APPEND = 37;

export const get_count = (keyStr) => {
  let numAppend = 0;

  for (const char of keyStr) {
    numAppend += 1 + char.charCodeAt(0) - 32;
    numAppend %= MAX_NUM_APPEND;
  }

  return numAppend;
};
