import express from 'express'
import KPI from '../models/kpi.js' 

const router = express.Router()

router.get('/kpi',async(req,res)=>{
    try{
        const kpi = await KPI.find()
        res.status(200).json(kpis)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
export default router;

//we sent the kpi objects 