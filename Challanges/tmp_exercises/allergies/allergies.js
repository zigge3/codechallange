const possibleAllergies = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
];

export class Allergies {
  constructor(allergenIndex) {
    this.allergenIndex = allergenIndex;
  }

  list() {}

  /**
   * Returns whether the person is alergic to the food or not
   * @param {string} food
   */
  allergicTo(food) {}
}
