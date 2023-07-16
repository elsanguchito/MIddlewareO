// 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

import express from 'express';
import cors from 'cors';
import supabase from './database/supabase.js';
import routes from './routes/routes.js';
import specs from './swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();


app.use(express.json());
app.use(cors());

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use('/docs', 
    swaggerUi.serve, 
    swaggerUi.setup(specs, {customCssUrl: CSS_URL})
);

app.use ((req, res, next)=>{req.supabase = supabase; next();}, routes);
app.use(routes);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})