import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { Stock } from './schemas/stock.schema';

@Controller('api/v1/stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  async findAll(): Promise<Stock[]> {
    return this.stocksService.findAll();
  }

  @Get(':symbol')
  async findOne(@Param('symbol') symbol: string): Promise<Stock> {
    return this.stocksService.findOne(symbol);
  }

  @Post('add')
  async addStock(@Body() stockData: Partial<Stock>): Promise<Stock> {
    return this.stocksService.addStock(stockData);
  }
}
