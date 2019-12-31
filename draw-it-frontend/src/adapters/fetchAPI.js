const DRAWINGS_URL = "http://localhost:3000/drawings";

const jsonify = res => res.json();

const getDrawings = () => {
  return fetch(DRAWINGS_URL).then(jsonify);
};

// need to add authorisation token to make sure the right user_id is used
const createDrawings = (drawingData) => {
  return fetch(DRAWINGS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: 1, url: drawingData })
  }).then(jsonify);
};

export default { getDrawings, createDrawings };
