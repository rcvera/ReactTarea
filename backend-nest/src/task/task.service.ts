import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({
      data,
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  update(id: number) {
    return this.prisma.task.update({
      where: { id },
      data: {
        completed: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}