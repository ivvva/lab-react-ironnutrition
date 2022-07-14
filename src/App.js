import './App.css';
import foodJson from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodJson);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(true);

  const displayedFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());;
  });

  const handleDeleteFood = (name) => {
    const foodsToKeep = foods.filter((food) => food.name !== name);
    setFoods(foodsToKeep);
  };

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}>
        {' '}
        {showForm ? 'Hide Form' : 'Add New Food'}{' '}
      </Button>
      {showForm && <AddFoodForm setFoods={setFoods} />}
      <Search style={{width: '60%'}} search={search} setSearch={setSearch} />
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
