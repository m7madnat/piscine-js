function pronoun(str) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  const result = {};
  const words = str.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));

  words.forEach((word, index) => {
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 };
      }
      result[word].count++;

      const nextWord = words[index + 1];
      if (nextWord && !pronouns.includes(nextWord)) {
        result[word].word.push(nextWord);
      }
    }
  });
  for (const key in result) {
    result[key].word = [...new Set(result[key].word)];
  }

  return result;
}
