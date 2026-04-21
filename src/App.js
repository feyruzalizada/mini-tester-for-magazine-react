import React from 'react';
import MyErrorBoundary from './components/MyErrorBoundary';
import TransactionModule from './components/TransactionModule';

function App() {
  // FEYRUZ YAZIB COMMENTI, OZUM YAZMISAM!
  //performansi(MS yoxluyuruq)
  const startTime = React.useRef(performance.now());
  
  React.useEffect(() => {
    const duration = performance.now() - startTime.current;
    console.log(`⏱️Rendered for ${duration.toFixed(2)} ms`);
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Feyruz Platform v1.0</h1>
      <p>Сфера: <strong>Bank Transactions</strong></p>
      
      <hr />

      {/* Оборачиваем только модуль транзакций */}
      <MyErrorBoundary>
        <TransactionModule />
      </MyErrorBoundary>

      <div style={{ marginTop: '20px', color: '#666' }}>
        <p>ℹ️ If module Transaction get error, this text will be here.</p>
      </div>
    </div>
  );
}

export default App;