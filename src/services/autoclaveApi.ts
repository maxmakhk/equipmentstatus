export interface MachineStatus {
  temperature?: number;
  pressure?: number;
  status?: string;
}

export interface StatusRequest {
  currentScreenID?: string;
}

const SERVER_URL = 'http://127.0.0.1:5000';

export interface MachineStatus {
  programData: {
    program_name: string;
    inCycle: boolean;
  };
  alarms: {
    alarm_text?: string[];
  };
  analogData: {
    chamber_temp: string;
    load_temp: string;
    drain_temp: string;
    airdet_temp: string;
    chamber_pressure: string;
    jacket_pressure: string;
    filter_pressure?: string;
    filter_temp?: string;
    vent_temp?: string;
  };
  analogVisibility?: any;
  buttonVisibility1?: any;
  buttonVisibility2?: any;
  digitalInputNames?: string[];
  digitalInputs?: boolean[];
  digitalOutputs?: boolean[];
  displayData?: any;
  displayVisibility1?: any;
  displayVisibility2?: any;
  forceManualBits?: boolean[];
  forceOnBits?: boolean[];
  systemConnected?: boolean;
}

export const fetchMachineStatus = async (
  currentScreenID?: string
): Promise<MachineStatus> => {
  const setting: StatusRequest = currentScreenID 
    ? { currentScreenID } 
    : {};

  const response = await fetch(`${SERVER_URL}/machineStatus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(setting),
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return response.json();
};
