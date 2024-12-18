const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require('../controllers/orderController');

router
  .route('/')
  .post(authenticateUser, createOrder)
  .get(authenticateUser, authorizePermissions('admin'), getAllOrders); // only admin can view all orders

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

router
  .route('/:id')
  .get(authenticateUser, getSingleOrder) // only the user who created the order can view it
  .patch(authenticateUser, updateOrder); // only the user who created the order can update it

module.exports = router;
