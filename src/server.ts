import express, { Express } from 'express';
import cors from 'cors';
import route from './Routing';

// =================================================================================================
//                                      SERVER CONFIGURATION
// =================================================================================================

// INITIATE THE SERVER APP
const app: Express = express();

// SERVER ACCEPT JSON & URLENCODED REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ALLOW CORS
app.use(cors({origin: '*'}));

// =================================================================================================
//                                        SERVER ROUTING
// =================================================================================================

// CONNECT THE ROUTING TO THE SERVER
app.use(route);

// =================================================================================================
//                                       RUNNING THE SERVER
// =================================================================================================

// RUN THE SERVER ACCORDING TO MODE
app.listen(2828, () => {
  console.log(`Server running on 'http://localhost:2828' !`);
});