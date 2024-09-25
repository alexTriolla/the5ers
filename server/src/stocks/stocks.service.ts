import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './schemas/stock.schema';

@Injectable()
export class StocksService {
  constructor(@InjectModel(Stock.name) private stockModel: Model<Stock>) {}

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async findOne(symbol: string): Promise<Stock> {
    return this.stockModel.findOne({ symbol }).exec();
  }

  async addStock(stockData: Partial<Stock>): Promise<Stock> {
    const newStock = new this.stockModel(stockData);
    return newStock.save();
  }
}
