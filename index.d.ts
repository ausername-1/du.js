declare module 'dangeroususers' {

	interface statsReturn {
		reports: number;
	}

	interface checkUserData {
		/** Discord Username */
		username: string,
		/** Total of different users that reported this account */ 
		reports: number,
		/** Recieved reports */
		total_reports: number,
		/** Percentage of the user score */
		score: string,
	}

	interface checkUserError {
		/** Message containing the error */
		Message: string,
		/** Http error code */
		Code: string,
	}

	interface reportUserData {
		/**
		 * This won't be returned if the report was successful.
		 */
		message?: string,
		/**
		 * This won't be returned if the api key is invalid.
		 */
		success?: boolean,
	}

	interface deleteAllReportsData {
		/** Message containing the status of this request */
		message: string,
	}

	export function stats(): Promise<statsReturn>;
	export function checkuser(id: string): Promise<checkUserData | checkUserError>;
	export function reportUser(key: string, id: string, details: string): Promise<reportUserData>;
	export function deleteAllReports(key: string): Promise<deleteAllReportsData>;
}
