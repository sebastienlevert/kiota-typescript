import {BaseCollectionPaginationCountResponse, PrintTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintTask[];
}
