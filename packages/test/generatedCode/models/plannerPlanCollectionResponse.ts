import {BaseCollectionPaginationCountResponse, PlannerPlan} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PlannerPlan[];
}
