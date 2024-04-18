import express from 'express';
import startServer from './server/index.js';

const app = express();
startServer(app);

