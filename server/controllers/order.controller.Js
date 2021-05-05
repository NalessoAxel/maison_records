const Ordermodel = require('../models/order.model');

module.exports.getAllOrders = async (req, res)=>{
    const orders = await Ordermodel.find()
    res.status(200).json(orders); 
}

module.exports.addOrder = async (req, res)=>{
   const {orderName,orderType,price,quantity,idOfUser,last_nameShipping,first_nameShipping,streetShipping,numberShipping,zipShipping,cityShipping,phonenumberShipping} = req.body
    // OrderName = nom de la merch
    // orderType, price, quantity == orderType, price, quantity
    // idOfUser sera l'id de l'acheteur (uidContext)
   try{
       const order = await Ordermodel.create({orderName,orderType,price,quantity,idOfUser,last_nameShipping,first_nameShipping,streetShipping,numberShipping,zipShipping,cityShipping,phonenumberShipping})
       res.status(201).json({ userMessage : order._id}) 
   }
   catch(err){
    res.status(400).json({ message : 'order error' })
   }

}


