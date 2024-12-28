import express from 'express';
import { register, login } from '../controllers/authController.js';
import { authenticateToken, authorizeRole } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

export default router;