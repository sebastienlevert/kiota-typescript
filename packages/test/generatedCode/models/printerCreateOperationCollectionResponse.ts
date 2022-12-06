import {BaseCollectionPaginationCountResponse, PrinterCreateOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCreateOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrinterCreateOperation[];
}
