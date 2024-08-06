// mui.d.ts o theme.d.ts
import { PaletteOptions } from '@mui/material/styles';

// Define un tipo para tus colores personalizados
interface MyColors {
	[color: string]: {
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};
}

declare module '@mui/material/styles' {
	interface Palette extends MyColors {}
	interface PaletteOptions extends MyColors {}
}
