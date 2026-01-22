import { TemperatureGauge } from './TemperatureGauge';
import { Settings } from './Settings';
import { type MachineStatus } from '../services/autoclaveApi';

interface MainContentProps {
  currentPage: 'gauges' | 'settings';
  data: MachineStatus;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function MainContent({ currentPage, data, darkMode, setDarkMode }: MainContentProps) {
  return (
    <>
      {/* Status Cards */}
      {currentPage === 'gauges' && (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: data.programData.inCycle ? '#27ae60' : '#95a5a6',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9 }}>Status</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>
            {data.programData.inCycle ? 'Running' : 'Stopped'}
          </div>
        </div>

        <div style={{
          backgroundColor: data.alarms.alarm_text?.length ? '#e74c3c' : '#27ae60',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9 }}>Alarms</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '5px' }}>
            {data.alarms.alarm_text?.length 
              ? data.alarms.alarm_text.join(', ') 
              : 'No Alarms'}
          </div>
        </div>
      </div>
      )}

      {/* Gauges Section */}
      {currentPage === 'gauges' && (
      <div style={{
        backgroundColor: darkMode ? '#2a2a2a' : 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        color: darkMode ? '#ffffff' : '#2c3e50'
      }}>
        <h3 style={{ marginTop: '0', marginBottom: '20px', color: '#2c3e50' }}>
          Sensor Readings
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0px'
        }}>
          <TemperatureGauge 
            label="Chamber Temp" 
            value={data.analogData.chamber_temp}
            maxValue={150}
          />
          <TemperatureGauge 
            label="Load Temp" 
            value={data.analogData.load_temp}
            maxValue={150}
          />
          <TemperatureGauge 
            label="Drain Temp" 
            value={data.analogData.drain_temp}
            maxValue={150}
          />
          <TemperatureGauge 
            label="Airdet Temp" 
            value={data.analogData.airdet_temp}
            maxValue={150}
          />
          <TemperatureGauge 
            label="Chamber Pressure" 
            value={data.analogData.chamber_pressure}
            maxValue={2000}
            unit=" mbar"
          />
          <TemperatureGauge 
            label="Jacket Pressure" 
            value={data.analogData.jacket_pressure}
            maxValue={2000}
            unit=" mbar"
          />
        </div>
      </div>
      )}

      {/* Settings Page */}
      {currentPage === 'settings' && (
        <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </>
  );
}
