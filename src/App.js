import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CharacterListPage from './pages/CharacterListPage'

function App() {
  return (
    <div>
        <Switch>
        <Route path="/" component={CharacterListPage}/>
   {/* <Route path="/people/:id" component={CharacterDetailPage}/> */}
 
    </Switch>
    </div>
  );
}

export default App;
