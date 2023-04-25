const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

import Card from "../UI/Card";
import classes from "./AvalibleMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvalibleMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal, index) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        price={meal.price}
        name={meal.name}
        description={meal.description}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvalibleMeals;
