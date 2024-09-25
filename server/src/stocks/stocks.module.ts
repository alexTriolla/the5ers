import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { Stock, StockSchema } from './schemas/stock.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
  ],
  providers: [StocksService],
  controllers: [StocksController],
})
export class StocksModule {}
