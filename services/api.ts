export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.BACKEND_URL;
  }
  return `http://localhost:${process.env.BACKEND_LOCAL_PORT}`;
};

export const serverDataHandler = (rawResponse: Response) => {
  if (rawResponse.status !== 200) {
    // return rawResponse.json()
    throw Error(`Server Issue: ${rawResponse.status}`);
  }
  return rawResponse.json();
};
