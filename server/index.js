import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from './routes/kpi.js';
import KPI from './models/kpi_m.js';
import {kpis} from './data/data.js';

/*Configurations*/
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

/*Routes*/
app.use('/kpi', kpiRoutes);



/*Mongoose SETUP*/
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
         useUnifiedTopology: true,
        })
    .then(async() => {
        app.listen(PORT, () => console.log(`Server port: ${PORT}`));
        console.log('MongoDB connected');

        /*Add data onetime only or as needed*/
        //await mongoose.connection.db.dropDatabase();
        //KPI.insertMany(kpis);
    })
    .catch((error) => console.log( `${error} did not connect`));
    
