import * as yup from 'yup';

export const filterSchema = yup.object().shape({
	division: yup.string().required('Division is required'),
	month: yup.number().required('Month is required'),
	year: yup.number().required('Year is required'),
});

export type FilterForm = yup.InferType<typeof filterSchema>;
