import { ingredientsInitials } from './ingredientsInitials';

export const countsIngredients = (ingredients: Array<string>) => {
  let listItem: any[] = [];
  let count: number = 0;
  let items: Object = {};
  ingredientsInitials.forEach((item) => {
    ingredients.forEach((item1) => {
      if (item.name == item1) {
        count++;
      }
    });
    if (count >= 1) {
      items = {
        name: item.name,
        quantity: count,
        price: count * item.price,
      };
      listItem.unshift(items);
    }
    count = 0;
  });
  return listItem;
};
