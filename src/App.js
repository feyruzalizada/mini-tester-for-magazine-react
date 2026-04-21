import React from 'react';
import MyErrorBoundary from './components/MyErrorBoundary';
import TransactionModule from './components/TransactionModule';

function App() {
  // FEYRUZ YAZIB COMMENTI, OZUM YAZMISAM!
  //performansi(MS yoxluyuruq)
  const startTime = React.useRef(performance.now());
  
  React.useEffect(() => {
    const duration = performance.now() - startTime;
    console.log(`⏱️Rendered for ${duration.toFixed(2)} ms`);
  }, []);

 
}

export default App;