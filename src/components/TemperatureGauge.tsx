import GaugeComponent from 'react-gauge-component';

interface TemperatureGaugeProps {
  label: string;
  value: string;
  maxValue?: number;
  unit?: string;
}

export const TemperatureGauge = ({ 
  label, 
  value, 
  maxValue = 100,
  unit = '°C' 
}: TemperatureGaugeProps) => {
  const numValue = parseFloat(value) || 0;

  return (
    <div 
    
    style={
        { 
            textAlign: 'center', 
            padding: '0px', 
            width: '100%',
            maxWidth: '160px',
            aspectRatio: '1 / 1' 
        }
    }
    >
    
      <GaugeComponent
        type="radial"
        arc={{
          colorArray: ['#5e5e5e', '#4d4d4d', '#5e5e5e'],
          subArcs: [{}, {}, {}],
          padding: 0.02,
          width: 0.3
        }}
        pointer={{
          elastic: true,
          animationDelay: 0
        }}
        labels={{
          valueLabel: {
            formatTextValue: () => `${numValue}${unit}`,
            style: { 
                fontSize: '35px', 
                fill: '#2c3e50',
                transform: 'translateY(10px)' 
            }
          },
          tickLabels: {
            type: 'outer',
            defaultTickValueConfig: {
                style: {
                fill: '#2c3e50'
                }
            },
            ticks: [
              { value: 0 },
              { value: maxValue / 2 },
              { value: maxValue }
            ]
          }
        }}
        value={numValue}
        minValue={0}
        maxValue={maxValue}
      />
      <h4>{label}</h4>
    </div>
  );
};
