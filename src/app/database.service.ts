import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private sqlite: SQLite) {
    this.createDatabase();
  }

  private createDatabase() {
    this.sqlite
      .create({
        name: 'mydatabase.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        // La base de datos se ha creado correctamente.
        // Puedes realizar operaciones en la base de datos aquí.
      })
      .catch((error) => {
        console.error('Error al crear la base de datos:', error);
      });
  }
}
