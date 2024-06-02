exports.updateTransactionStatus = async(req,res)=>{
    try {
        const order = await Order.findOne({where:{orderid:order_id}})
        await order.update({paymentid:payment_id, status:'SUCCESSFUL'})
        await req.user.update({ispremiumuser:true});
        return res.status(202).json({success:true,message:"Transaction Successful"})
    } catch (error) {
        
    }
}