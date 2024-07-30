export interface CatalogValue {
	kind?: string;
	name: string;
	value: string;
}

export interface SelectOption {
	label: string;
	value: string;
}

export interface SelectFunction {
	[key: string]: MetadataResponse[];
}

export interface Catalog {
	_id: string;
	catalog: string;
	values: CatalogValue[];
}

export interface Catalogs {
	areas: Catalog;
	companies: Catalog;
	functions: Catalog;
	output: Catalog;
	parameters: Catalog;
}

export type FixedParamsObject = { [key: string]: any };

type FixedParamsArray = FixedParamsObject[];

export interface SubAction {
	description?: string;
	endpoint?: string;
	fixed: boolean;
	fixed_params: FixedParamsObject | FixedParamsArray;
	logOnlyError?: boolean;
	parameters: string[];
	queryStringParams: string[];
	rfc_data_property: string;
	sa: number;
	z_function: string;
}

/**
 * This interface is used to define the structure of Metadata object.
 * We use this to call the appropriate RFC metadata in SAP.
 */
export interface Metadata {
	area?: string | undefined;
	option: number;
	sub_actions: SubAction;
}

/**
 * This interface is used to define the structure of Metadata object to be updated
 */
export interface UpdateMetadata {
	metadata: Metadata;
	optionId: string;
}
/**
 * This interface is used to define the structure of MetadataResponse object.
 */
export interface MetadataResponse {
	__v?: number;
	_id: string;
	area: string;
	option: number;
	sub_actions: SubAction[];
}

/**
 * This interface is used to define the structure of API node-rfc types.
 */
export interface SerializedResponse {
	rowset: {
		Datos: unknown[];
	};
}

/**
 * This interface is used to define the structure of Function response object.
 */
export interface FunctionResponse {
	data: SerializedResponse;
	message: string;
	status: number;
}

export interface NewCatalogItem {
	_id: string;
	kind: string;
	name: string;
	value: string;
}

export interface CatalogOption {
	catalog?: string;
	catalogId: string;
	optionName: string;
}

export interface AddSubAction {
	area: string;
	id: string;
	lastSa: number;
	option: number;
}

export interface EditSubAction extends AddSubAction {
	subAction: SubAction;
}

export interface SelectedSubAction {
	optionId: string;
	subAction: number;
}

export interface SubActionsSearch {
	area: string;
	label: string;
	option: number;
	sa: number;
	z_function: string;
}

export interface ExpandAccordionOption {
	area: string | null;
	option: number | null;
}

export interface CatalogMenu {
	anchorEl: null | HTMLElement;
}

export interface LastOption {
	area: string;
	maxOption: number;
	maxSa: number;
}

export interface CatalogValue {
	name: string;
	value: string;
}

export interface Catalog {
	_id: string;
	catalog: string;
	values: CatalogValue[];
}
