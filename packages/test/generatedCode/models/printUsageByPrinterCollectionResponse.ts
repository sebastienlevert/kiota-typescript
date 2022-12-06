import {BaseCollectionPaginationCountResponse, PrintUsageByPrinter} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintUsageByPrinter[];
}
