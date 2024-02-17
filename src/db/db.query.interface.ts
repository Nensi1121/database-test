import { FindOptions } from 'sequelize/types';

export interface DbQueryInterface extends FindOptions {
  attributes?: any[];
  entity: any;
  where?: any;
  rawQuery?: string;
  fineTuneRawQuery?: boolean;
}
