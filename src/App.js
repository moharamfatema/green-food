import './App.css';
import React from 'react'
import RecipeParent from './OpenRecipeComponents/RecipePage'
//import {Col, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";



function App() {
    /*var recipe = {};
    fetch('http://localhost:5000/hits')
    .then(response => response.json())
    .then(data=>{
        console.log(data[0]);
        recipe=data[0].recipe
    }
    )*/
   let recipe = {

       "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_02cf8fcad91453c4bec0cb9c406efbfb",
       "label": "Alfredo Linguine",
       "image": "https://www.edamam.com/web-img/48d/48d22ced6e798f0f3857e1f66c3eb55e.jpg",
       "source": "Delish",
       "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a7922/alfredo-linguine-recipe/",
       "shareAs": "http://www.edamam.com/recipe/alfredo-linguine-02cf8fcad91453c4bec0cb9c406efbfb/alfredo",
       "yield": 4.0,
       "dietLabels": [
           "Balanced"
       ],
       "healthLabels": [
           "Vegetarian",
           "Pescatarian",
           "Egg-Free",
           "Peanut-Free",
           "Soy-Free",
           "Fish-Free",
           "Shellfish-Free",
           "Pork-Free",
           "Red-Meat-Free",
           "Crustacean-Free",
           "Celery-Free",
           "Mustard-Free",
           "Sesame-Free",
           "Lupine-Free",
           "Mollusk-Free",
           "Alcohol-Free",
           "Sulfite-Free",
           "Kosher"
       ],
       "cautions": [
           "FODMAP"
       ],
       "ingredientLines": [
           "1 tbsp. I Can't Believe It's Not Butter!® Spread",
           "½ c. walnuts",
           "1 large clove garlic",
           "1 jar Bertolli® Creamy Alfredo Sauce",
           "8 oz. linguine"
       ],
       "ingredients": [
           {
               "text": "1 tbsp. I Can't Believe It's Not Butter!® Spread",
               "weight": 14.2,
               "foodCategory": "Dairy",
               "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
               "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
           },
           {
               "text": "½ c. walnuts",
               "weight": 2.0,
               "foodCategory": "plant-based protein",
               "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
               "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
           },
           {
               "text": "1 large clove garlic",
               "weight": 5.0,
               "foodCategory": "vegetables",
               "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
               "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
           },
           {
               "text": "1 jar Bertolli® Creamy Alfredo Sauce",
               "weight": 453.0,
               "foodCategory": "condiments and sauces",
               "foodId": "food_b2ayx5tbjhbyviaj61ut3ajui5yu",
               "image": null
           },
           {
               "text": "8 oz. linguine",
               "weight": 226.796185,
               "foodCategory": "grains",
               "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
               "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
           }
       ],
       "calories": 2175.53284635,
       "totalWeight": 700.996185,
       "totalTime": 30.0,
       "cuisineType": [
           "italian"
       ],
       "mealType": [
           "lunch/dinner"
       ],
       "dishType": [
           "main course"
       ],
       "totalNutrients": {
           "ENERC_KCAL": {
               "label": "Energy",
               "quantity": 2175.53284635,
               "unit": "kcal"
           },
           "FAT": {
               "label": "Fat",
               "quantity": 98.6041923935,
               "unit": "g"
           },
           "FASAT": {
               "label": "Saturated",
               "quantity": 37.902151432450005,
               "unit": "g"
           },
           "FATRN": {
               "label": "Trans",
               "quantity": 0.46547599999999995,
               "unit": "g"
           },
           "FAMS": {
               "label": "Monounsaturated",
               "quantity": 34.51229847635,
               "unit": "g"
           },
           "FAPU": {
               "label": "Polyunsaturated",
               "quantity": 22.1688164834,
               "unit": "g"
           },
           "CHOCDF": {
               "label": "Carbs",
               "quantity": 254.00223133950004,
               "unit": "g"
           },
           "FIBTG": {
               "label": "Fiber",
               "quantity": 12.026477920000001,
               "unit": "g"
           },
           "SUGAR": {
               "label": "Sugars",
               "quantity": 18.397178139500003,
               "unit": "g"
           },
           "PROCNT": {
               "label": "Protein",
               "quantity": 65.01732252400001,
               "unit": "g"
           },
           "CHOLE": {
               "label": "Cholesterol",
               "quantity": 157.37,
               "unit": "mg"
           },
           "NA": {
               "label": "Sodium",
               "quantity": 5882.4097711,
               "unit": "mg"
           },
           "CA": {
               "label": "Calcium",
               "quantity": 1119.80019885,
               "unit": "mg"
           },
           "MG": {
               "label": "Magnesium",
               "quantity": 197.37597805000001,
               "unit": "mg"
           },
           "K": {
               "label": "Potassium",
               "quantity": 1113.34349255,
               "unit": "mg"
           },
           "FE": {
               "label": "Iron",
               "quantity": 5.2234904050000015,
               "unit": "mg"
           },
           "ZN": {
               "label": "Zinc",
               "quantity": 6.705256208500001,
               "unit": "mg"
           },
           "P": {
               "label": "Phosphorus",
               "quantity": 1386.59778965,
               "unit": "mg"
           },
           "VITA_RAE": {
               "label": "Vitamin A",
               "quantity": 219.45799999999997,
               "unit": "µg"
           },
           "VITC": {
               "label": "Vitamin C",
               "quantity": 1.586,
               "unit": "mg"
           },
           "THIA": {
               "label": "Thiamin (B1)",
               "quantity": 0.5749865665,
               "unit": "mg"
           },
           "RIBF": {
               "label": "Riboflavin (B2)",
               "quantity": 0.271715711,
               "unit": "mg"
           },
           "NIA": {
               "label": "Niacin (B3)",
               "quantity": 8.607549145,
               "unit": "mg"
           },
           "VITB6A": {
               "label": "Vitamin B6",
               "quantity": 0.6984765827000001,
               "unit": "mg"
           },
           "FOLDFE": {
               "label": "Folate equivalent (total)",
               "quantity": 52.4193133,
               "unit": "µg"
           },
           "FOLFD": {
               "label": "Folate (food)",
               "quantity": 52.4193133,
               "unit": "µg"
           },
           "FOLAC": {
               "label": "Folic acid",
               "quantity": 0.0,
               "unit": "µg"
           },
           "VITB12": {
               "label": "Vitamin B12",
               "quantity": 0.8848400000000001,
               "unit": "µg"
           },
           "VITD": {
               "label": "Vitamin D",
               "quantity": 0.21299999999999997,
               "unit": "µg"
           },
           "TOCPHA": {
               "label": "Vitamin E",
               "quantity": 4.7645158035,
               "unit": "mg"
           },
           "VITK1": {
               "label": "Vitamin K",
               "quantity": 15.402796185,
               "unit": "µg"
           },
           "WATER": {
               "label": "Water",
               "quantity": 32.653952315,
               "unit": "g"
           }
       },
       "totalDaily": {
           "ENERC_KCAL": {
               "label": "Energy",
               "quantity": 108.77664231749999,
               "unit": "%"
           },
           "FAT": {
               "label": "Fat",
               "quantity": 151.69875752846153,
               "unit": "%"
           },
           "FASAT": {
               "label": "Saturated",
               "quantity": 189.51075716225003,
               "unit": "%"
           },
           "CHOCDF": {
               "label": "Carbs",
               "quantity": 84.66741044650001,
               "unit": "%"
           },
           "FIBTG": {
               "label": "Fiber",
               "quantity": 48.105911680000006,
               "unit": "%"
           },
           "PROCNT": {
               "label": "Protein",
               "quantity": 130.03464504800002,
               "unit": "%"
           },
           "CHOLE": {
               "label": "Cholesterol",
               "quantity": 52.45666666666666,
               "unit": "%"
           },
           "NA": {
               "label": "Sodium",
               "quantity": 245.1004071291667,
               "unit": "%"
           },
           "CA": {
               "label": "Calcium",
               "quantity": 111.980019885,
               "unit": "%"
           },
           "MG": {
               "label": "Magnesium",
               "quantity": 46.99428048809524,
               "unit": "%"
           },
           "K": {
               "label": "Potassium",
               "quantity": 23.688159415957447,
               "unit": "%"
           },
           "FE": {
               "label": "Iron",
               "quantity": 29.019391138888896,
               "unit": "%"
           },
           "ZN": {
               "label": "Zinc",
               "quantity": 60.956874622727284,
               "unit": "%"
           },
           "P": {
               "label": "Phosphorus",
               "quantity": 198.08539852142857,
               "unit": "%"
           },
           "VITA_RAE": {
               "label": "Vitamin A",
               "quantity": 24.384222222222217,
               "unit": "%"
           },
           "VITC": {
               "label": "Vitamin C",
               "quantity": 1.7622222222222221,
               "unit": "%"
           },
           "THIA": {
               "label": "Thiamin (B1)",
               "quantity": 47.91554720833334,
               "unit": "%"
           },
           "RIBF": {
               "label": "Riboflavin (B2)",
               "quantity": 20.90120853846154,
               "unit": "%"
           },
           "NIA": {
               "label": "Niacin (B3)",
               "quantity": 53.79718215625,
               "unit": "%"
           },
           "VITB6A": {
               "label": "Vitamin B6",
               "quantity": 53.72896790000001,
               "unit": "%"
           },
           "FOLDFE": {
               "label": "Folate equivalent (total)",
               "quantity": 13.104828324999998,
               "unit": "%"
           },
           "VITB12": {
               "label": "Vitamin B12",
               "quantity": 36.86833333333334,
               "unit": "%"
           },
           "VITD": {
               "label": "Vitamin D",
               "quantity": 1.4199999999999997,
               "unit": "%"
           },
           "TOCPHA": {
               "label": "Vitamin E",
               "quantity": 31.76343869,
               "unit": "%"
           },
           "VITK1": {
               "label": "Vitamin K",
               "quantity": 12.8356634875,
               "unit": "%"
           }
       }
}
  return (
    <div className="App">

          <RecipeParent recipe = {recipe}/>

    {/*<footer>
        <Navbar variant="dark" bg="dark">
            <Navbar.Brand id="edamam-badge" data-color="white"></Navbar.Brand>
            <Navbar.Text>Green Food</Navbar.Text>
        </Navbar>
    </footer>*/}
    </div>
  );
}

export default App;
