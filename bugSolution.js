// bugSolution.js
import * as Constants from 'expo-constants';

export const getDeviceName = async () => {
  const deviceName = Constants.deviceName;
  if (!deviceName || deviceName.trim() === '') {
    // Fallback mechanism - Implement a more robust alternative
    console.warn('Expo Constants.deviceName returned null or empty string; using fallback.');
    //  Try another method here (e.g. reading from a system file)
    return 'Fallback Device Name'; // Replace with actual fallback retrieval method
  } else {
    return deviceName;
  }
};

// Example usage
getDeviceName().then((name) => console.log('Device Name:', name));