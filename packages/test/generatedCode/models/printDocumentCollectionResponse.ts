import {BaseCollectionPaginationCountResponse, PrintDocument} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocumentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintDocument[];
}
