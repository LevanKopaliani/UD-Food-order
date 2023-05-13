// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvalibleMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvalibleMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://uf-food-order-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Somthing went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsloading}>
        <p>{error}</p>
      </section>
    );
  }

  const MealsList = meals.map((meal, index) => {
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
        <ul> {MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvalibleMeals;
