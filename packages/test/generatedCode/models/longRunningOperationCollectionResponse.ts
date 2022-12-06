import {BaseCollectionPaginationCountResponse, LongRunningOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LongRunningOperation[];
}
