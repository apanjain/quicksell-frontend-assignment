export const getData = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Apan.json"
    )
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
export const updateBackend = (count) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Apan: count }),
  };
  return new Promise((resolve, reject) => {
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
