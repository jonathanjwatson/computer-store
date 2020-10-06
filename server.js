const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// SAMPLE CRUD ROUTES


// READ
app.get("/api/computer", (req, res) => {
  res.json({
    error: false,
    data: [],
    message: "Successfully retrieved all computers. ",
  });
});

// CREATE
app.post("/api/computer", (req, res) => {
  console.log(req.body);
  // SAVE THE NEW COMPUTER TO THE DATABASE
  // IF SUCCESSFUL RETURN A RESPONSE
  // IF UNSUCCESSFUL RETURN A RESPONSE
  res.json({
    error: false,
    data: req.body,
    message: "Successfully created new computer",
  });
});

// UPDATE
app.put("/api/computer/:id", (req, res) => {
  // RUN AN UPDATE QUERY WHERE ID = req.params.id
  // RUN THE QUERY WITH THE NEW PUT BODY
  console.log(req.body);
  res.json({
    error: false,
    data: null,
    message: `Successfully updated computer with id ${req.params.id}`,
  });
});

// DELETE
app.delete("/api/computer/:id", (req, res) => {
    // RUN A DELETE QUERY WHERE ID = req.params.id
    res.json({
        error: false,
        data:  null,
        message: `Successfully deleted computer with id ${req.params.id}`
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
