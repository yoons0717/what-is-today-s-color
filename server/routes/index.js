const express = require('express');
const router = express.Router();

const testData = {
  title: 'hello react!',
  content: 'this is content',
  color:'example'
}
router.get('/', (req, res) => {
  console.log('http://localhost:3001/api/');
  res.send(testData);
});

router.get('/hello', (req, res) => {
  res.send('Hello World!')
})

module.exports = router;