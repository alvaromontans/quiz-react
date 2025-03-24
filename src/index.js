import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { QuizProvider } from './contexts/QuizContext';
import { DarkModeProvider } from './contexts/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
