export interface Theme {
  backgroundColor: string;
  primaryColor: string;
  textColor: string;
}

export const categoryThemes: Record<string, Theme> = {
  'Marketing Suite': {
    backgroundColor: '#FFF0F5', // Lavender Blush
    primaryColor: '#DB7093',    // Pale Violet Red
    textColor: '#4A0E2E'
  },
  'IT & Administration Suite': {
    backgroundColor: '#F0F8FF', // Alice Blue
    primaryColor: '#4682B4',    // Steel Blue
    textColor: '#0E2A47'
  },
  'Tools': {
    backgroundColor: '#F5F5F5', // White Smoke
    primaryColor: '#696969',    // Dim Gray
    textColor: '#1A1A1A'
  },
  'Sales Suite': {
    backgroundColor: '#FFF5EE', // Seashell
    primaryColor: '#FF7F50',    // Coral
    textColor: '#4D1F12'
  },
  'Business Solutions': {
    backgroundColor: '#F0FFF0', // Honeydew
    primaryColor: '#2E8B57',    // Sea Green
    textColor: '#0B331E'
  },
  'Finance & Accounts Suite': {
    backgroundColor: '#F5FFFA', // Mint Cream
    primaryColor: '#20B2AA',    // Light Sea Green
    textColor: '#083D3A'
  },
  'HR Solutions Suite': {
    backgroundColor: '#FFFAF0', // Floral White
    primaryColor: '#DAA520',    // Goldenrod
    textColor: '#423208'
  },
  'Productivity Suite': {
    backgroundColor: '#E6E6FA', // Lavender
    primaryColor: '#9370DB',    // Medium Purple
    textColor: '#2E1A47'
  },
  'IoT': {
    backgroundColor: '#E0FFFF', // Light Cyan
    primaryColor: '#008B8B',    // Dark Cyan
    textColor: '#003333'
  },
  'Legal Suite': {
    backgroundColor: '#F8F8FF', // Ghost White
    primaryColor: '#483D8B',    // Dark Slate Blue
    textColor: '#141126'
  },
  'default': {
    backgroundColor: '#FFFFFF',
    primaryColor: '#3B82F6', // Blue 500
    textColor: '#1F2937'
  }
};

export const getThemeByCategory = (category: string): Theme => {
  return categoryThemes[category] || categoryThemes['default'];
};
