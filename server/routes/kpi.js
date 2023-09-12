import express from 'express'

const router = express.Router()

router.get('/kpi',async(req,res)=>{
    try{
        const kpi = await KPI.find()
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
export default router;