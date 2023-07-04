class Storage {
    static getCalorieLimit(defaultLimit = 2000) {
        let calorieLimit = localStorage.getItem('calorieLimit');

        if (calorieLimit === null) {
            calorieLimit = defaultLimit;
        }

        return calorieLimit;
    }

    static setCalorieLimit(calorieLimit) {
        localStorage.setItem('calorieLimit', calorieLimit);
    }

    static getTotalCalories(defaultCalories = 0) {
        let totalCalories = localStorage.getItem('totalCalories');

        if (totalCalories === null) {
            totalCalories = defaultCalories;
        }

        return parseInt(totalCalories);
    }

    static updateTotalCalories(calories) {
        localStorage.setItem('totalCalories', calories);
    }

    static getMeals() {
        let meals = localStorage.getItem('meals');

        if (meals === null) {
            meals = [];
        } else {
            meals = JSON.parse(meals);
        }

        return meals;
    }

    static saveMeal(meal) {
        const meals = Storage.getMeals();
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    static removeMeal(id) {
        const meals = Storage.getMeals();
        const newMeals = meals.filter((meal) => meal.id !== id);

        localStorage.setItem('meals', JSON.stringify(newMeals));
    }

    static getWorkouts() {
        let workouts = localStorage.getItem('workouts');

        if (workouts === null) {
            workouts = [];
        } else {
            workouts = JSON.parse(workouts);
        }

        return workouts;
    }

    static saveWorkout(workout) {
        const workouts = Storage.getWorkouts();
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }

    static removeWorkout(id) {
        const workouts = Storage.getWorkouts();
        const newWorkouts = workouts.filter((workout) => workout.id !== id);

        localStorage.setItem('workouts', JSON.stringify(newWorkouts));
    }

    static clearAll() {
        const limit = Storage.getCalorieLimit();
        localStorage.clear();
        Storage.setCalorieLimit(limit);

        //If you want to reset the limit to 2000
        //localStorage.clear();
    }

}

export default Storage;