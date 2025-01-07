import express from 'express'
import Item from '../models/Item.js'

const router = express.Router()

router.get('/getitems', async (req,res) => {
    try {
        const items = await Item.find({})
        res.json(items)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
})

export default router;