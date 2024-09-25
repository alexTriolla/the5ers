import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stock extends Document {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  stockExchange: string;

  @Prop({ required: true })
  exchangeShortName: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  change: number;

  @Prop()
  marketValue: number;

  @Prop()
  totalCost: number;

  @Prop()
  graphData: number[]; // Add the field for graph data
}

export const StockSchema = SchemaFactory.createForClass(Stock);
