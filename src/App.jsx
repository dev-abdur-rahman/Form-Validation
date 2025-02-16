import React, { useState } from 'react';
import Login from './Components/LogIn';
import SignUp from './Components/SingUp';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div>
      {isSignUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : (
        <Login setIsSignUp={setIsSignUp} />
      )}
    </div>
  )
}

export default App