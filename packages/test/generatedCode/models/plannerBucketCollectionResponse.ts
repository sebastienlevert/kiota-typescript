import {BaseCollectionPaginationCountResponse, PlannerBucket} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PlannerBucket[];
}
