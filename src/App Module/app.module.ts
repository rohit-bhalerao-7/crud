import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Item } from '../Entities/item.entity';
import { ItemModule } from '../item/item.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // change to your database type
      host: '172.31.0.0',
      port: 5432,
      username: 'postgres',
      password: 'Rohitps123',
      database: 'Nestjs',
      entities: [Item],
      synchronize: true,
    }),
    // other modules here
    ItemModule,
  ],
})
export class AppModule {}
