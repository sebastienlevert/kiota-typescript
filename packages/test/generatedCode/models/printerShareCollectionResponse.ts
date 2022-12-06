import {BaseCollectionPaginationCountResponse, PrinterShare} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterShareCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrinterShare[];
}
