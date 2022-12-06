import {BaseCollectionPaginationCountResponse, SchedulingGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SchedulingGroup[];
}
