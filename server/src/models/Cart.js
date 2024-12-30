import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
})

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    items: [CartItemSchema],
    totalPrice: {
        type: Number,
        default: 0,
    }
});

export default mongoose.model('Cart', CartSchema);
