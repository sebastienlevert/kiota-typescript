import {BaseCollectionPaginationCountResponse, ManagedAppOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppOperation[];
}
