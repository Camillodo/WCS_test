//IMPORT
const db = require('../database');


// Argonaut CLASS (to read all instances of argonauts and create new ones we need to set up a model)
class Argonaut {
  constructor(data = {}) {
    //We loop through all props even if there's only one (name)
    for (const prop in data ) {
        this[prop] = data[prop];
    }
  }
  //Method to find all entries of argonauts with an async await function
    static async findAll() {
      //we prepare and execute db query
      const { rows } = await db.query('SELECT * FROM argo;');
      // then we return a copy of all entries we creat a new instance for each of them
      return rows.map(singleargonaut => new Argonaut(singleargonaut));
  }
    //Method to create or update entries of argonaut with an async await function
  async save() {
    // if id already exists we only update
    if (this.id){
      //UPDATE
    }
    else{
      //INSERT
      // if not, we insert a new entry in db
      //we prepare and execute db query
      const { rows } = await db.query('INSERT INTO argo (name) VALUES ($1) RETURNING id;', [this.name])
      this.id = +rows[0].id;
  }
  }
}

//EXPORT
module.exports = Argonaut;
