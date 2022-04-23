const md5 = require('md5');

export const getApiHash = () => {
  const ts = new Date().getTime();
  const hash = md5(
    `${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`,
  );
  return {
    ts,
    apikey: process.env.MARVEL_PUBLIC_KEY,
    hash,
  };
};
