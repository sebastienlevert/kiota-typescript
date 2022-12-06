import {BaseCollectionPaginationCountResponse, WorkbookNamedItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookNamedItem[];
}
