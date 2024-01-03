// src/item/item.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '../Entities/item.entity';
import { CreateItemDto } from './DTOs/create-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.itemService.findOne(id);
  }

  //   @Post()
  //   create(@Body() item: Item): Promise<Item> {
  //     return this.itemService.create(item);
  //   }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() item: Partial<Item>): Promise<void> {
    return this.itemService.update(id, item);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.itemService.delete(id);
  }
}
