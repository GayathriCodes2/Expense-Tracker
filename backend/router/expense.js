const express=require('express');
const router = express.Router();
const expenseController = require('../controllers/expense');
router.post('/expense',expenseController.createExpense);
router.get('/expense',expenseController.readExpense);
router.delete('/expense/:id',expenseController.deleteExpense);

module.exports = router;