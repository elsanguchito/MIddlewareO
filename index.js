// 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

import express from 'express';
import cors from 'cors';
import V1SwaggerDocs from './swagger.js';
import supabase from './database/supabase.js';
import routes from './routes/routes.js';
import specs from './swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();


app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use ((req, res, next)=>{req.supabase = supabase; next();}, routes);
app.use(routes);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})