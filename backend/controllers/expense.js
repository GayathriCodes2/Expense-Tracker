const expense = require('../models/expense')

exports.createExpense = async (req, res) => {
    try {
        console.log(req.body);
        const data = await expense.create(req.body)
        console.log(data);
        res.status(200).send({ success: true, message: 'Expense Created Successfully', data: data })
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: 'Error Creating Expense' })
    }
}



exports.readExpense = async(req,res)=>{
    try {
        const userid = req.user.id;
        const data = await expense.findAll({where:{userId:userid}});
        res.status(200).send({ success: true, message: 'Expense Readed Successfully', data: data })
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: 'Error Readed Expense' })
    }
}

exports.deleteExpense = async(req,res)=>{
    try {
        console.log(req.params.id);
        const data = await expense.destroy({where:{id:req.params.id}})
       
        res.status(200).send({ success: true, message: 'Expense Deleted Successfully', data: data })
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: 'Error Readubg Expense' })
    }
}