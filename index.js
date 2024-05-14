const express = require("express");
const cors = require("cors");
const app = express();
items = require("./items.json");

app.use(cors());

const getItemsFromDatabase = async (page, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * limit;
      const end = start + limit;
      const paginatedItems = items.slice(start, end);
      resolve({
        items: paginatedItems,
        total: items.length,
        page,
        limit,
      });
    }, 1000);
  });
};

app.get("/api/items", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const data = await getItemsFromDatabase(page, limit);
    res.json(data);
  } catch (error) {
    res.status(500).send({ message: "Error fetching items" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
