// 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

import express from 'express';
import cors from 'cors';
import supabase from './database/supabase.js';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use ((req, res, next)=>{req.supabase = supabase; next();}, routes);
app.use(routes);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})