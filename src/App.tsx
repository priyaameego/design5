import React from 'react';
import { ConceptProvider } from './context/ConceptContext';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <ConceptProvider>
      <div className="min-h-screen flex flex-col font-sans bg-[#F4F7F6] text-[#253331]">
        {/* Strictly Homepage-Only Preview */}
        <HomePage />
      </div>
    </ConceptProvider>
  );
};

export default App;