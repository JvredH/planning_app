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

router.get('plans', (req, res) => {
  // send query to database to get previously created plans for current user
  // send back the plans
})

router.post('/plans', (req, res) => {
  // parse req body
  // add to database
  // send success response
})

router.delete('/plans', (req, res) => {
  // take id from params
  // delete entry with same id from db
  // send success response
})

router.get('/history', (req, res) => {
  // take id from params
  // query db to get data,
  // send data back to user
})

router.delete('/history', (req, res) => {
  // take id from params
  // query db to delete the entry
  // send success response
})
