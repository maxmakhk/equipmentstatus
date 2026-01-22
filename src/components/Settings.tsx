interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Settings({ darkMode, setDarkMode }: SettingsProps) {
  return (
    <div style={{
      backgroundColor: darkMode ? '#2a2a2a' : 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      color: darkMode ? '#ffffff' : '#2c3e50'
    }}>
      <h2 style={{ marginTop: '0', marginBottom: '20px', color: darkMode ? '#ffffff' : '#2c3e50' }}>
        Settings
      </h2>
      
      <div style={{ maxWidth: '600px' }}>
        {/* Theme Settings */}
        <div style={{
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: darkMode ? '1px solid #444444' : '1px solid #ecf0f1'
        }}>
          <h3 style={{ marginTop: '0', color: darkMode ? '#aaaaaa' : '#34495e' }}>Display</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <label style={{ fontSize: '16px' }}>Dark Mode</label>
            <input 
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Device Settings */}
        <div style={{
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: darkMode ? '1px solid #444444' : '1px solid #ecf0f1'
        }}>
          <h3 style={{ marginTop: '0', color: darkMode ? '#aaaaaa' : '#34495e' }}>Device</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: darkMode ? '#bbbbbb' : '#7f8c8d' }}>Device Name</label>
            <input 
              type="text" 
              placeholder="Enter device name"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: darkMode ? '1px solid #444444' : '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: darkMode ? '#bbbbbb' : '#7f8c8d' }}>API Endpoint</label>
            <input 
              type="text" 
              placeholder="Enter API endpoint"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: darkMode ? '1px solid #444444' : '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}
            />
          </div>
        </div>

        {/* Sensor Settings */}
        <div style={{
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: darkMode ? '1px solid #444444' : '1px solid #ecf0f1'
        }}>
          <h3 style={{ marginTop: '0', color: darkMode ? '#aaaaaa' : '#34495e' }}>Sensors</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: darkMode ? '#bbbbbb' : '#7f8c8d' }}>Max Temperature (°C)</label>
            <input 
              type="number" 
              placeholder="150"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: darkMode ? '1px solid #444444' : '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: darkMode ? '#bbbbbb' : '#7f8c8d' }}>Max Pressure (mbar)</label>
            <input 
              type="number" 
              placeholder="2000"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: darkMode ? '1px solid #444444' : '1px solid #bdc3c7',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '30px'
        }}>
          <button style={{
            background: '#27ae60',
            border: 'none',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            flex: 1
          }}>
            Save Changes
          </button>
          <button style={{
            background: '#95a5a6',
            border: 'none',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            flex: 1
          }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
