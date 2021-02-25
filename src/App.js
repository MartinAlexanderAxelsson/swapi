import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CharacterListPage from './pages/CharacterListPage'

function App() {
  return (
    <div>
        <Switch>
            <Route path="/" component={CharacterListPage}/>
        </Switch>
    </div>
  );
}

export default App;
