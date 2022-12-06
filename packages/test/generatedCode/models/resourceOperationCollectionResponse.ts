import {BaseCollectionPaginationCountResponse, ResourceOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceOperation[];
}
