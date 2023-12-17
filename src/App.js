import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import GreetingLogic from './components/messageLogic/messageLogic';

const App = () => (
<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Greeting</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<GreetingLogic />} />
      </Routes>
    </div>
  </Router>
);

export default App;
