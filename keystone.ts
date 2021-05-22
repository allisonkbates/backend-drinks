import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Drink } from './schemas/Drink';
import { DrinkImage } from './schemas/DrinkImage';
import { Ingredient } from './schemas/Ingredient';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // to do add in initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // To Do: Add data seedng here
    },
    lists: createSchema({
      // schema items here
      User,
      Drink,
      DrinkImage,
      Ingredient,
    }),
    ui: {
      // to do : change this for roles
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // Graphql query
      User: 'id',
    }),
  })
);
