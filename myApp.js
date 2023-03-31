require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
});

let Person = new mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {

  let me = new Person({
    name: 'Ashley',
    age: 32,
    favoriteFoods: ['Sushi', 'Pizza']
  });

  me.save((err, data) => {
    if(err){
      return console.error(err);
    }
    
    done(null, data)
  });

};

let arrayOfPeople = [{name: 'Sam', age: 18, favoriteFoods: ['Borger']}, {name: 'Fable', age: 22, favoriteFoods: ['Chimken']}];

const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, (err, people) => {

    if (err) return console.error(err);
    done(null, people);
  });
 
};

let personName = 'Ashley';

const findPeopleByName = (personName, done) => {

  Person.find({name: personName}, (err, personFound) => {
    if(err) return console.error(err);

    done(null, personFound);
  })
  
};

let food = 'Pizza';

const findOneByFood = (food, done) => {

  Person.findOne({favoriteFoods: food}, (err, data) => {
    if(err) return console.error(err);

    done(null, data);
  })
};

let personId = 1;

const findPersonById = (personId, done) => {

  Person.findById({_id: personId}, (err, data) => {
    if(err) return console.error(err);

    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
