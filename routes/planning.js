import express from "express";

const router = express.Router();

router.post('/planner', (req, res) => {
  // req.body: {start: dt, end: dt, travelers: int, interests: arr, activity: str, budget: str}
  // iterate and validate that the data types are correct, catch => return error
  // build out a query string (per open OpenAI API documentation)
  // send query string to openAI
  // PPST to OPENAI API, (Axios?)
  // Format the response

});

// pseudo code the rest of the routes
