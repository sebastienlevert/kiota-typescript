import {BaseCollectionPaginationCountResponse, RichLongRunningOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RichLongRunningOperation[];
}
