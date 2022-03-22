import { Keystone } from '@keystonejs/keystone';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { StaticApp } from '@keystonejs/app-static';
import { NextApp } from '@keystonejs/app-next';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';
import expressSession from 'express-session';
import connectSession from 'connect-mongo';

const MongoStore = connectSession(expressSession);

import initialiseData from './initialData';
import { createLists, defaultAccess } from './schema';
import { staticRoute, staticPath, distDir } from './config';

const PROJECT_NAME = 'abkm';

const adapterConfig = { mongoUri: `mongodb://localhost/${PROJECT_NAME}` };


const keystone = new Keystone({
  cookieSecret: process.env.COOKIE_SECRET,
  cookie: { secure: process.env.INSECURE_COOKIES ? false : undefined },
  sessionStore: new MongoStore({ url: adapterConfig.mongoUri }),
  adapter: new Adapter(adapterConfig),
  onConnect: initialiseData,
  // defaultAccess,
});

createLists(keystone);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: staticRoute, src: staticPath }),
    new AdminUIApp({
      name: PROJECT_NAME,
      authStrategy,
    }),
    new NextApp({ dir: 'site' })
  ],
  distDir,
};
