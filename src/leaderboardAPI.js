export const getData = async (url) => {
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    return data.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const sendData = async (url, score) => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(score),
    });
  } catch (err) {
    throw new Error(err);
  }
};