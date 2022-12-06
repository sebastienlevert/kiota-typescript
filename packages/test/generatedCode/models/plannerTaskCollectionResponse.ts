import {BaseCollectionPaginationCountResponse, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PlannerTask[];
}
