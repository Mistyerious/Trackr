import { Client } from 'pg';
import { MongoClient } from 'mongodb';
import { createConnection, Connection } from 'mysql';

const Connection = createConnection('').constructor;

export default class Tracker {
  public database: MongoClient | Client | Connection;
  private databaseType: string;

  constructor(database: MongoClient | Client | Connection) {
    this.database = database;
    this.databaseType = database instanceof MongoClient
      ? 'mongodb'
      : database instanceof Client
      ? 'postgresql'
      : 'mysql';
  }
}