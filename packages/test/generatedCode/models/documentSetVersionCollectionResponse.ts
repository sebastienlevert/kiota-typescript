import {BaseCollectionPaginationCountResponse, DocumentSetVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DocumentSetVersion[];
}
