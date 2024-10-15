export type FirestoreState = {
  document: any | null;
  isPending: boolean;
  error: string | null;
  success: boolean;
};

export type FirestoreAction =
  | { type: 'IS_PENDING' }
  | { type: 'ADDED_DOCUMENT'; payload: any }
  | { type: 'DELETED_DOCUMENT' }
  | { type: 'ERROR'; payload: string };

export type UseFirestoreReturn = {
  addDocument: (doc: any) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
  response: FirestoreState;
};

export interface FirestoreDocument {
  id: string;
  [key: string]: any; // This allows the document to have any additional fields
}

export interface UseCollectionReturn {
  documents: FirestoreDocument[] | null;
  error: string | null;
}

export type QueryParams = [string, any, any?];
export type OrderByParams = [string, 'asc' | 'desc'];
