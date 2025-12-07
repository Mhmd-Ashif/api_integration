const express = require("express");
const { fetchPosts, fetchUsers } = require("./api");
const { getCache, setCache } = require("./cache");

const app = express();
const PORT = 3000;

app.get("/init", async (req, res) => {
  try {
    const posts = await fetchPosts();
    const users = await fetchUsers();
    setCache("posts", posts);
    setCache("users", users);
    res.json({ message: "Data cached successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/posts", (req, res) => {
  let posts = getCache("posts");
  if (!posts.length)
    return res.status(400).json({ error: "Cache empty, call /init first" });
  const { userId, title } = req.query;
  if (userId) posts = posts.filter((p) => p.userId == userId);
  if (title) posts = posts.filter((p) => p.title.includes(title));

  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const posts = getCache("posts");
  const users = getCache("users");
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  const author = users.find((u) => u.id === post.userId);
  res.json({ ...post, author });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
