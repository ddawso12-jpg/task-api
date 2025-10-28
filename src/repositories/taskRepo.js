import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

// Find a task by id
export async function findTaskById(id) {
  return prisma.task.findUnique({
    where: { id },
  });
}