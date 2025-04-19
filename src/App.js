import { useState } from 'react';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 1 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 1 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        {messages.map((message) => {
          message;
        })}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
