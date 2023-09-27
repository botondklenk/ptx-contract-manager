import express from 'express';
import {
  createContract,
  getContract,
  updateContract,
  deleteContract,
  signContract,
  checkDataExploitation,
} from '../controllers/bilateral.contract.controller';

const router = express.Router();

// Create
router.post('/contract/', createContract);
// Read
router.get('/contract/:id', getContract);
// Update
router.put('/contract/:id', updateContract);
// Delete
router.delete('/contract/:id', deleteContract);
//
// Sign contract
router.put('/contract/sign/:id', signContract);
// Check data exploitation
router.put('/contract/:id', checkDataExploitation);

export default router;
