const Razorpay = require("razorpay");
const Order = require("../models/order");

exports.premiumMembership = async (req, res, next) => {
    try {
        var rzp = new Razorpay({
            key_id: "rzp_test_o73F108D61OhRg",
            key_secret: "YIryBDt1lKhzeHr2tSdYdUbX"
        })
        const amount = 2500;
        rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
            if (err) {
                res.send(JSON.stringify(err)); 
            }
            req.user.createOrder({ orderid: order.id, status: "PENDING" })
                .then(() => {
                    return res.status(201).json({ order, key_id: rzp.key_id });
                })
                .catch(err => {
                    res.send(JSON.stringify(err));
                })
        })
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateTransactionStatus = async (req, res, next) => {
    try {
        console.log(req.user);
        const { payment_id, order_id } = req.body;
        console.log(payment_id, order_id);
        const order = await Order.findOne({ where: { orderId: order_id } });
        const paymentUpdate = order.update({ paymentid: payment_id, status: "SUCCESS" });
        const userUpdate = req.user.update({ isPremiumUser: true });
        await Promise.all([paymentUpdate, userUpdate])
        return res.status(202).json({ message: "Transaction Successful" });
    }
    catch (error) {
        console.log(error);
        res.status(403).json({ message: "Something went wrong" });
    }
}

exports.failedTransactionStatus = async (req, res, next) => {
    try {
        const { payment_id, order_id } = req.body;
        const order = await Order.findOne({ where: { orderId: order_id } });
        const paymentUpdate = order.update({ paymentId: payment_id, status: "FAILED" });
        const userUpdate = req.user.update({ ispremiumuser: false });
        await Promise.all([paymentUpdate, userUpdate])
        return res.status(202).json({ message: "Transaction Failed" });
    }
    catch (error) {
        console.log(error);
        res.status(403).json({ message: "Something went wrong" });
    }
}