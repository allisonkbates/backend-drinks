import { list } from '@keystone-next/keystone/schema';
import { text, select, relationship } from '@keystone-next/fields';

export const Ingredient = list({
  fields: {
    name: text({ isRequired: true }),
    drink: relationship({
      ref: 'Drink.linkedIngredients',
      many: true,
    }),
    category: select({
      options: [
        { label: 'Base Spirit', value: 'BaseSpirit' },
        { label: 'Liquers', value: 'Liquers' },
        { label: 'Bitters', value: 'Bitters' },
        { label: 'Syrups', value: 'Syrups' },
        { label: 'Grocery', value: 'Grocery' },
      ],
      defaultValue: 'Base Spirit',
      ui: {
        displayMode: 'select',
        createView: { fieldMode: 'edit' }, // this hides this feld from the create field - nifty trick!
      },
    }),
    notes: text(),
  },
});
