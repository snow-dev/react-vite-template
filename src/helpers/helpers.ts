/**
 * Format date to a readable format from string
 * @param date string
 * @returns string formatted date
 * */
export const formatDate = (date: string) => {
	const newDate = new Date(date);
	const day = newDate.getDate();
	const month = newDate.getMonth() + 1;
	const year = newDate.getFullYear();
	const time = newDate.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	return `${year}/${month}/${day}, at ${time}`;
};

/**
 * Validate what kind of error is and compose a message
 *
 * @param error : any
 *
 * @return {string}
 */
export const getErrorMessage = (error: any): string => {
	// Verificar si es un error de FetchBaseQuery
	if ('status' in error && 'data' in error) {
		return error.data?.message || error.error || `Error: ${error.status}`;
	}

	// Verificar si es un error serializado
	if ('name' in error && 'message' in error) {
		return error.message;
	}

	return 'Unknown error';
};

/**
 * Get error object
 * @param error
 * @returns {object}
 */
export const getErrorObject = (error: any): any => {
	// Verificar si es un error de FetchBaseQuery
	if ('data' in error) {
		return error.data;
	}

	// Verificar si es un error serializado
	if ('name' in error && 'message' in error) {
		return {
			error: error.message,
		};
	}

	return 'Unknown error';
};

/**
 * Get the elapsed time in following format: HH:mm:ss:ms
 * @param elapsedTime : number
 *
 * @returns string
 */
export const getElapsedTimeFormatted = (elapsedTime: number) => {
	let remainingTime = elapsedTime;

	const hours = Math.floor(remainingTime / 3600000);
	remainingTime -= hours * 3600000;

	const minutes = Math.floor(remainingTime / 60000);
	remainingTime -= minutes * 60000;

	const seconds = Math.floor(remainingTime / 1000);
	remainingTime -= seconds * 1000;

	const milliseconds = remainingTime;

	// Formatea cada componente para asegurar que siempre tenga dos dígitos, excepto los milisegundos
	const formattedHours = hours.toString().padStart(2, '0');
	const formattedMinutes = minutes.toString().padStart(2, '0');
	const formattedSeconds = seconds.toString().padStart(2, '0');
	// Los milisegundos pueden tener hasta 3 dígitos
	const formattedMilliseconds = milliseconds.toString().padStart(3, '0');

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
};

/**
 * Convert a string to camel case
 * @param input : string
 *
 * @returns string
 */
export const convertToCamelCase = (input: string): string => {
	const words = input.split(' ').filter((word) => word.length > 0);
	const firstWord = words[0].toLowerCase();
	const remainingWords = words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

	return [firstWord, ...remainingWords].join('');
};

export interface Test {
	age: number;
	name: string;
}
