// export type CRUDID = number;

// export interface IRead<T> {
//   findAll(): Promise<T[]>;
//   findById(id: CRUDID): Promise<T> | null;
// }

// export interface ICreate<T> {
//   create: (data: T) => Promise<T>;
// }

// export interface IUpdate<T> {
//   update(id: CRUDID, data: T): Promise<T> | null;
// }

// export interface IDelete {
//   delete(id: CRUDID): Promise<number>;
// }

// export interface ICRUD<T> extends IRead<T>, ICreate<T>, IUpdate<T>, IDelete {}
