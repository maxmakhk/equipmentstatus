import { useState } from 'react';
import { useMachineStatus } from './hooks/useMachineStatus';
import { MainContent } from './components/MainContent';
import { SlideMenu } from './components/SlideMenu';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'gauges' | 'settings'>('gauges');
  const [darkMode, setDarkMode] = useState(false);
  const { data, error, loading } = useMachineStatus();

  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        color: '#e74c3c', 
        padding: '20px', 
        textAlign: 'center' 
      }}>
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        No data available
      </div>
    );
  }

  return (
    <div className="App" style={{ 
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
      backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
      color: darkMode ? '#ffffff' : '#2c3e50',
      minHeight: '100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>



      {/* Header Section */}
      <header style={{
        backgroundColor: darkMode ? '#0d1117' : '#2c3e50',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <SlideMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />

        <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>
          Equipment Status Dashboard
        </h1>
        <h2 style={{ margin: '0', fontSize: '20px', fontWeight: 'normal' }}>
          {data.programData.program_name}
        </h2>
      </header>

      <MainContent currentPage={currentPage} data={data} darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  );
}


export default App;
