interface SlideMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  currentPage: 'gauges' | 'settings';
  setCurrentPage: (page: 'gauges' | 'settings') => void;
}

export function SlideMenu({ menuOpen, setMenuOpen, currentPage, setCurrentPage }: SlideMenuProps) {
  return (
    <>
      {/* Menu Icon */}
      <button 
        onClick={() => setMenuOpen(true)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          background: '#334155',
          border: 'none',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" 
        fill="#ffffff" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Slide-out Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: menuOpen ? 0 : '-340px',
        width: '300px',
        height: '100vh',
        background: 'rgb(149, 165, 166)',
        zIndex: 1100,
        transition: 'left 0.3s ease',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
        padding: '20px'
      }}>
        <button 
          onClick={() => setMenuOpen(false)}
          style={{
            background: '#334155',
            border: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '8px',
            marginBottom: '30px',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <button 
            onClick={() => {
              setCurrentPage('gauges');
              setMenuOpen(false);
            }}
            style={{
              background: currentPage === 'gauges' ? '#2c3e50' : '#334155',
              border: 'none',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              textAlign: 'left'
            }}>
            Gauges
          </button>
          <button 
            onClick={() => {
              setCurrentPage('settings');
              setMenuOpen(false);
            }}
            style={{
              background: currentPage === 'settings' ? '#2c3e50' : '#334155',
              border: 'none',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              textAlign: 'left'
            }}>
            Settings
          </button>
        </nav>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1050
          }}
        />
      )}
    </>
  );
}
