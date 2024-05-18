export const getSuggestions = (d: string): Promise<string[]> => {
  const list_of_suggestions = ["App", "Apple", "Marks"];
  return new Promise<string[]>((resolve, reject) => {
    console.log(list_of_suggestions.filter((item) => item.includes(d)));
    console.log(
      d,
      typeof d,
      list_of_suggestions,
      list_of_suggestions.filter((item) => item.includes(d))
    );
    setTimeout(() => {
      resolve(list_of_suggestions.filter((item) => item.includes(d)));
    }, 300);
  });
};
