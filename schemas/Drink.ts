import { list } from '@keystone-next/keystone/schema';
import { text, select, relationship } from '@keystone-next/fields';

export const Drink = list({
  // To Do : Access
  // access:
  fields: {
    name: text({ isRequired: true }),
    ingredients: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    linkedIngredients: relationship({
      ref: 'Ingredient.drink',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
    preparation: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    barware: select({
      /* should barware be a relation instead so we serve the image from cloudinary */
      options: [
        { label: 'Old Fashioned Glass', value: 'OLD-FASHIONED-GLASS' },
        { label: 'Cocktail Glass', value: 'COCKTAIL-GLASS' },
        { label: 'Highball Glass', value: 'HIGHBALL-GLASS' },
        { label: 'Champagne Flute', value: 'CHAMPAGNE-FLUTE' },
        { label: 'Copper Mug', value: 'COPPER-MUG' },
      ],
      defaultValue: 'OLD-FASHIONED-GLASS',
      ui: {
        displayMode: 'select',
        createView: { fieldMode: 'edit' }, // this hides this feld from the create field - nifty trick!
      },
    }),
    relatedDrinks: relationship({ ref: 'Drink', many: true }),
    source: text(),
    sourceLink: text(),
    editorialNotes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'DrinkImage.drink',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Published', value: 'PUBLISHED' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' }, // this hides this feld from the create field - nifty trick!
      },
    }),
  },
});
