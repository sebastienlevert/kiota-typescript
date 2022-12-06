import {BaseCollectionPaginationCountResponse, Notebook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotebookCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Notebook[];
}
