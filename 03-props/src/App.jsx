import React from 'react'
import Card from './components/Card';

const App = () => {

  return (
    <div className="parent">
      <Card
        user="Pawan"
        age={18}
        img="https://images.unsplash.com/photo-1792883124276-10f36bc9a776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      />
      <Card
        user="Abhi"
        age={22}
        img="https://images.unsplash.com/photo-1792706024358-cf0fe8abb0e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      />
    </div>
  );
}

export default App
