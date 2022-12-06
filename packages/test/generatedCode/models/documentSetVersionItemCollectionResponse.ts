import {BaseCollectionPaginationCountResponse, DocumentSetVersionItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DocumentSetVersionItem[];
}
