// src/item/item.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../Entities/item.entity';
import { CreateItemDto } from './DTOs/create-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemRepository.findOne({ where: { id } });
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(newItem);
  }

  async update(id: number, itemData: Partial<Item>): Promise<void> {
    await this.itemRepository.update(id, itemData);
  }

  async delete(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
