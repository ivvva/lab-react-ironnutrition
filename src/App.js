import './App.css';
import foodJson from './foods.json';
import FoodBox from './FoodBox';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodJson);

  const displayedFoods = foods.filter((food) => {
    return food.name.toLowerCase()
  });

  const handleDeleteFood = (name) => {
    const foodsToKeep = foods.filter((food) => food.name !== name);
    setFoods(foodsToKeep);
  };

  return(<div className="App">
       {/* Display Add Food component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayedFoods.length > 0 ? (
          displayedFoods.map((food) => {

            return (
              <FoodBox
                key={food.image}
                {...food}
                handleDeleteFood={handleDeleteFood}
              />
            );
          })
        ) : (
          <p>No food :/</p>
        )}
      </Row>
    </div>
  );
}
 
export default App;