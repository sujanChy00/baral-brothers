export const truncateString = (word: string, length: number) => {
  if (!word) return null;

  if (word.length <= length) return word;

  return word.slice(0, length) + "...";
};
