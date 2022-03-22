import { createItem } from '@keystonejs/server-side-graphql-client';
import crypto from 'crypto';

const randomString = () => crypto.randomBytes(6).hexSlice();

export default async keystone => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });

  if (count === 0) {
    console.log('💾 Creating initial users...');
    await seedUsers(initialData, keystone);
  }
};

async function seedUsers(initialData, keystone) {
  /* 1. Insert the data which has no associated relationships
   * 2. Insert the data with the required relationships using connect
   */
  for (let item of initialData['User']) {
    const users = await createItem({
      keystone,
      listKey: 'User',
      item,
      returnFields: 'id, name, email', // fields can be used if needed
    });
    console.log(`
      User created:
        email: ${item.email}
        password: ${item.password}
      Please change these details after initial login.
      `);
  }
}

const initialData = {
  User: [
    { name: 'Super User', email: 'super@keystonejs.com', role: 'su', password: randomString() },
    { name: 'Admin User', email: 'admin@keystonejs.com', role: 'admin', password: randomString() },
  ],

};
