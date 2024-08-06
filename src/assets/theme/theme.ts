import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';

const uraniumBlue = '#A5CEE9';
const antiflashWhite = '#F5F9FB';
const steelBlue = '#1383C5';
const charcoal = '#314053';

// Paleta de colores

export const purpleColors = {
	100: '#D1C4E9',
	200: '#B39DDB',
	300: '#9575CD',
	400: '#7E57C2',
	50: '#EDE7F6',
	500: '#673AB7',
	600: '#5E35B1',
	700: '#512DA8',
	800: '#4527A0',
	900: '#311B92',
};

export const blueColors = {
	100: '#BBDEFB',
	200: '#90CAF9',
	300: '#64B5F6',
	400: '#42A5F5',
	50: '#E3F2FD',
	500: '#2196f3',
	600: '#1E88E5',
	700: '#1976D2',
	800: '#1565C0',
	900: '#0D47A1',
};

export const greyColors = {
	100: '#E0E0E0',
	200: '#BDBDBD',
	300: '#9E9E9E',
	400: '#757575',
	50: '#F5F9FB',
	500: '#314053',
	600: '#424242',
	700: '#212121',
	800: '#111111',
	900: '#000000',
};

export const greenColors = {
	100: '#C8E6C9',
	200: '#A5D6A7',
	300: '#009845',
	400: '#66BB6A',
	50: '#E8F5E9',
	500: '#43A047',
	600: '#388E3C',
	700: '#2E7D32',
	800: '#1B5E20',
	900: '#0D4F0C',
};

export const redColors = {
	100: '#FFCDD2',
	200: '#EF9A9A',
	300: '#E57373',
	400: '#EF5350',
	50: '#FFEBEE',
	500: '#F44336',
	600: '#E53935',
	700: '#D32F2F',
	800: '#C62828',
	900: '#B71C1C',
};

export const warningColors = {
	100: '#FFE0B2',
	200: '#FFCC80',
	300: '#FFB74D',
	400: '#FFA726',
	50: '#FFF3E0',
	500: '#FF9800',
	600: '#FB8C00',
	700: '#F57C00',
	800: '#EF6C00',
	900: '#E65100',
};

interface MyPaletteOptions extends PaletteOptions {
	blue: typeof blueColors;
	green: typeof greenColors;
	purple: typeof purpleColors;
	red: typeof redColors;
	yellow: typeof warningColors;
}

export const baseTheme: ThemeOptions = {
	components: {
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: greyColors[200],
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					// Color del label normal
					'&.Mui-focused': {
						color: greyColors[800], // Color del label al estar enfocado
					},
					'&.MuiInputLabel-shrink': {
						color: greyColors[600], // Color del label cuando se reduce
					},
					color: greyColors[800],
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: greyColors[400],
				},
				root: {
					'& .MuiInputBase-input': {
						color: greyColors[800],
					},
					// Color of normal label
					'&.Mui-focused': {
						color: greyColors[800], // Color del label al estar enfocado
					},

					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: greyColors[800],
					},

					'&.MuiInputLabel-shrink': {
						color: greyColors[800], // Color del label cuando se reduce
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: greyColors[600],
					},
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						color: greyColors[400],
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						color: greyColors[500],
					},
				},
			},
		},
	},

	palette: {
		blue: blueColors,
		common: {
			black: charcoal,
			white: antiflashWhite,
		},
		error: {
			contrastText: antiflashWhite,
			dark: redColors[700],
			light: redColors[200],
			main: redColors[500],
		},
		green: greenColors,
		grey: greyColors,
		primary: {
			contrastText: antiflashWhite,
			dark: greyColors[700],
			light: greyColors[50],
			main: greyColors[400],
		},

		purple: purpleColors,
		red: redColors,
		secondary: {
			contrastText: antiflashWhite,
			dark: greyColors[700],
			light: greenColors[200],
			main: greenColors[500],
		},
		text: {
			disabled: uraniumBlue,
			primary: charcoal,
			secondary: steelBlue,
		},
		warning: {
			contrastText: '#FFF',
			dark: warningColors[700],
			light: warningColors[200],
			main: warningColors[500],
		},
		yellow: warningColors,
	} as MyPaletteOptions,

	shape: {
		borderRadius: 8,
	},

	spacing: 8,

	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
};

export const createCustomTheme = (mode: 'light' | 'dark'): ThemeOptions =>
	createTheme({
		...baseTheme,
		palette: {
			...baseTheme.palette,
			mode,
		},
	} as ThemeOptions);
