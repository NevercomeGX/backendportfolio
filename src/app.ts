import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import router from './atoms';
import { secrets } from './utils';
import { errorHandler } from './utils/errors';
import { CLIENT_ORIGIN } from './utils/secrets';
import specs from '../openapi.json';

// Initialize the application
const app: Application = express();

// CORS (Cross Origin Resource Sharing)
app.use(
  cors({
    credentials: true,
    origin: CLIENT_ORIGIN,
  })
);

// Security headers
app.use(helmet());

// Compress the response
app.use(compression());

// Parse incoming requests with JSON payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse incoming requests cookies
app.use(cookieParser(secrets.SECRET_KEY));

// Logging
const format =
  secrets.ENVIRONMENT === 'development'
    ? 'dev'
    : '[:date[clf]] :method :url :status :res[content-length] - :response-time ms';
app.use(morgan(format));

// OpenAPI docs
if (secrets.ENVIRONMENT === 'development') {
  app.use('/docs', swaggerUi.serve);
  app.get('/docs', swaggerUi.setup(specs));
}

app.use(router);

// Error handler
app.use(errorHandler);

export default app;
