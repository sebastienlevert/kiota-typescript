import {BaseCollectionPaginationCountResponse, Printer} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Printer[];
}
