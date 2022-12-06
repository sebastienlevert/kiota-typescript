import {BaseCollectionPaginationCountResponse, PrintJob} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJobCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintJob[];
}
