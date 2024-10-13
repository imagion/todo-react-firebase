// Define the type for the collection's documents
export interface FirestoreDocument {
  id: string;
  [key: string]: any; // This allows the document to have any additional fields
}

// Type for the return value of the hook
export interface UseCollectionReturn {
  documents: FirestoreDocument[] | null;
  error: string | null;
}

// Define the type for _query and _orderBy
export type QueryParams = [string, any, any?];
export type OrderByParams = [string, 'asc' | 'desc'];
