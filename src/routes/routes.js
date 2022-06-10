
import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import KudosPage from '../Pages/KudosPage';
import ManagerPage from '../Pages/ManagerPage';

import QuestionnairePage from '../Pages/QuestionnairePage'

const Routes = () => {

  return (<Switch>
    <Route exact path='/' element={<HomePage />} />
    <Route exact path='/questionnaire' element={<QuestionnairePage />} />
    <Route exact path='/kudos' element={<KudosPage />} />
    <Route exact path='/manager' element={<ManagerPage />} />

  </Switch>);

}


export default Routes;