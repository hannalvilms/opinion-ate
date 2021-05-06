import axios from "axios";

const baseURL =
  "https://outside-in-dev-api.herokuapp.com/uUyXHOZw0n1pLp74uyZwBaKfnLoFsNxL";

const client = axios.create();

const api = {
  loadRestaurants() {
    return client
      .get(baseURL + "/restaurants")
      .then((response) => response.data);
  },
  createRestaurant(name) {
    return client
      .post(baseURL + "/restaurants", { name })
      .then((response) => response.data);
  },
};

export default api;
