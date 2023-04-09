import type { Handler } from 'express';
import * as schemas from './schemas';
import * as services from './services';

export const list: Handler = async (req, res) => {
  // Validate query
  const query = schemas.query.parse(req.query);

  // Get all languages
  const data = await services.findMany(query);

  // Response
  return res.json(data);
};

export const retrieve: Handler = async (req, res) => {
  // Get language
  const language = await services.findLanguageById(req.object.id);

  // Return response
  return res.json(language);
};

export const create: Handler = async (req, res) => {
  // Validate data
  const data = schemas.create.parse(req.body);

  // Create an language
  const language = await services.create(data);

  // Response
  return res.status(201).json(language);
};

export const update: Handler = async (req, res) => {
  // Validate data
  const data = schemas.update.parse(req.body);

  // Update the language
  const language = await services.update(req.object.id, data);

  // Response
  return res.json(language);
};

export const destroy: Handler = async (req, res) => {
  // Destroy the language
  await services.destroy(req.object.id);

  // Response
  return res.status(204).json();
};
