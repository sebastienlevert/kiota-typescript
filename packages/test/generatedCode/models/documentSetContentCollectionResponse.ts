import {BaseCollectionPaginationCountResponse, DocumentSetContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetContentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DocumentSetContent[];
}
