import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTableDto): Promise<Table> {
    return this.prisma.table
      .create({ data: dto })
      .catch(this.handleErrorConstraintUnique);
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async verifyIdAndReturnTable(id: string): Promise<Table> {
    const table: Table = await this.prisma.table.findUnique({
      where: { id },
    });

    if (!table) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return table;
  }

  handleErrorConstraintUnique(error: Error): never {
    const splitedMessage = error.message.split('`');
    
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);

    const errorMessage = `Entrada '${
      splitedMessage[splitedMessage.length - 2]
    }' não está respeitando a constraint UNIQUE`;

    throw new UnprocessableEntityException(errorMessage);
  }

  findOne(id: string): Promise<Table> {
    return this.verifyIdAndReturnTable(id);
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.verifyIdAndReturnTable(id);

    return this.prisma.table
      .update({ where: { id }, data: dto })
      .catch(this.handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnTable(id);

    return this.prisma.table.delete({
      where: { id },
      select: { number: true, id: true },
    });
  }
}
