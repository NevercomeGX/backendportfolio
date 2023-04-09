import type { Handler } from 'express';
import * as schemas from './schemas';
import * as services from './services';

export const list: Handler = async (req, res) => {
  // Validate query
  const query = schemas.query.parse(req.query);

  // Get all projects
  const data = await services.findMany(query);

  // Response
  return res.json(data);
};

export const retrieve: Handler = async (req, res) => {
  // Get project
  const project = await services.findProjectById(req.object.id);

  // Return response
  return res.json(project);
};

export const create: Handler = async (req, res) => {
  // Validate data
  const data = schemas.create.parse(req.body);

  // Create an project
  const project = await services.create(data);

  // Response
  return res.status(201).json(project);
};

export const update: Handler = async (req, res) => {
  // Validate data
  const data = schemas.update.parse(req.body);

  // Update the project
  const project = await services.update(req.object.id, data);

  // Response
  return res.json(project);
};

export const destroy: Handler = async (req, res) => {
  // Destroy the project
  await services.destroy(req.object.id);

  // Response
  return res.status(204).json();
};
