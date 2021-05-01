import { list } from '@keystone-next/keystone/schema';
import { text, select, relationship } from '@keystone-next/fields';

export const Drink = list({
  // To Do : Access
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'DrinkImage.drink',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image, altText'] },
        inlineEdit: { fields: ['image, altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' }, // this hides this feld from the create field - nifty trick!
      },
    }),
    // Photo
  },
});
