import GoDB from '../godb';
import GoDBTable from '../table';

type PrimitiveType = number | string | boolean | null;
type GoDBDataType = PrimitiveType | object;

export type GoDBClass = GoDB;
export type GoDBTableClass = GoDBTable;

export interface GoDBData {
  id: number,
  [key: string]: GoDBDataType | Array<GoDBDataType>
}

export interface GoDBInputData {
  [key: string]: GoDBDataType | Array<GoDBDataType>
}

// some problems here
export interface GoDBTableSearch {
  [key: string]: number | string
}

export type GetDBCallback = (idb: IDBDatabase) => void;

export type TableFindFunction = (item?: GoDBData) => boolean;

export type TableIndexTypes =
  NumberConstructor
  | StringConstructor
  | BooleanConstructor
  | DateConstructor
  | ObjectConstructor
  | ArrayConstructor;

export interface TableIndex {
  type: TableIndexTypes
  multiEntry?: boolean
  unique?: boolean
  default?: any
  ref?: string
}

export interface GoDBConfig {
  version?: number
}

export interface GoDBTableSchema {
  [key: string]: TableIndex | TableIndexTypes
}

export interface GoDBSchema {
  [table: string]: GoDBTableSchema
}

export interface GoDBTableDict {
  [table: string]: GoDBTableClass
}

// Test for types checking:
// const schema: GoDBSchema = {
//   user: {
//     name: {
//       type: String,
//       unique: true,
//       someUnsupportedKey: '' // error detected by ts
//     },
//     a: Number,
//     b: Date,
//     c: Object,
//     d: Array,
//     e: Boolean,
//     f: Object,
//     g: Buffer // not supported yet
//   }
// };
