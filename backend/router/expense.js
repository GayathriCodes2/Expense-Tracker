const express=require('express');
const router = express.Router();

const userAuthentication = require('../middleware/auth');

const expenseController = require('../controllers/expense');
router.post('/expense',expenseController.createExpense);
router.get('/expense',userAuthentication.authenticate,expenseController.readExpense);
router.delete('/expense/:id',expenseController.deleteExpense);

module.exports = router;