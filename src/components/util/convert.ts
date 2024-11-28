export const conv = (slovo_1: string) => {
  const slovo = slovo_1.toLowerCase();
  slovo.trim();

  let i = 0;
  let k = slovo.length;

  while (i < slovo.length) {
    if (slovo[i] === "(") {
      k = i;
    }
    i = i + 1;
  }
  const slovonm = slovo.slice(0, k);

  return slovonm;
};
