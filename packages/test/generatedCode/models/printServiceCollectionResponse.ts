import {BaseCollectionPaginationCountResponse, PrintService} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintService[];
}
