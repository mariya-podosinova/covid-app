export const fetchData = async () => {
  const result = await fetch("https://api.covid19api.com/countries");
  return result.json();
};
export const fetchCases = async (slug) => {
  const result = await fetch(
    `https://api.covid19api.com/total/country/${slug}/status/confirmed`
  );
  return result.json();
};
