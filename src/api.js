const axios = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

async function fetchPosts() {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch posts: " + err.message);
  }
}

async function fetchUsers() {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch users: " + err.message);
  }
}

module.exports = { fetchPosts, fetchUsers };
