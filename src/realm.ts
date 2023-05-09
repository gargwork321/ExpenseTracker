import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { Category } from "./model/transactionType";

// Define your object model
export class Entry extends Realm.Object<Entry> {
  _id!: Realm.BSON.ObjectId;
  price!: string;
  notes!: string;
  date!: string;
  cat!: Category;

  static schema: Realm.ObjectSchema = {
    name: 'Entry',
    properties: {
      _id: 'objectId',
      price: 'string',
      notes:'string',
      date: 'string',
      cat: '{}'
    },
  };
}

const realmConfig: Realm.Configuration = {
  schema: [Entry],
  // onFirstOpen(realm) {
  //     realm.create('Entry', {
  //       _id: new Realm.BSON.ObjectID(),
  //       price: '₹ 350',
  //       notes: 'Lorem ipsum',
  //       date:'09 May, 2023',
  //       cat:{id: 1,image: require('../assets/images/call-center.png'),name: 'Service',bgColor: '#F6AFB0'},
  //     });
  // }
};

export const entryContext = createRealmContext(realmConfig);


//   const realmConfig: Realm.Configuration = {
//     schema: [Entry],
//   };
  
//   // Create a realm context
// export const {RealmProvider, useRealm, useObject, useQuery} =
// createRealmContext(realmConfig);


  