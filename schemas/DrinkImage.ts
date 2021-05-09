import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
};

export const DrinkImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'source',
    }),
    altText: text(),
    imgCredit: text(),
    drink: relationship({
      ref: 'Drink.photo',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'drink'],
    },
  },
});
