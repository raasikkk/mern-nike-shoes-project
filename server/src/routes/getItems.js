import express from 'express'
import Item from '../models/Item.js'

const router = express.Router()

router.get('/getitems', async (req, res) => {
    try {
        const items = await Item.find({})
        res.json(items)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
})

router.get('/getitems/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({message: 'Item not found'})
        }

        res.json(item)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
})

export default router;