const DRAWINGS_URL = "http://localhost:3000/drawings/";

const jsonify = res => res.json();

const getDrawings = () => {
  return fetch(DRAWINGS_URL).then(jsonify);
};

// need to add authorisation token to make sure the right user_id is used
const createDrawings = (user, drawingData) => {
  return fetch(DRAWINGS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: user, url: drawingData })
  }).then(jsonify);
};

const addLike = (id, likes) => {
  return fetch(DRAWINGS_URL + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id, number_of_likes:likes })
  } ).then(jsonify);
}

export default { getDrawings, createDrawings, addLike };
