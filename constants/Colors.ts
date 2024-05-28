const tintColorLight = '#4caf50'; // Bright Green for light theme
const tintColorDark = '#81c784'; // Lighter Green for dark theme

export default {
  light: {
    text: '#212121', // Dark Gray
    background: '#f5f5f5', // Light Gray Background
    tint: tintColorLight, // Bright Green
    tabIconDefault: '#bdbdbd', // Medium Gray
    tabIconSelected: tintColorLight, // Bright Green
  },
  dark: {
    text: '#e0e0e0', // Light Gray
    background: '#121212', // Dark Background
    tint: tintColorDark, // Lighter Green
    tabIconDefault: '#757575', // Darker Gray
    tabIconSelected: tintColorDark, // Lighter Green
  },
};
