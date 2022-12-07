import {PlannerCategoryDescriptions, PlannerDelta, PlannerPlanContextDetailsCollection, PlannerUserIds} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanDetails extends Partial<Parsable>, PlannerDelta {
    /** The categoryDescriptions property */
    categoryDescriptions?: PlannerCategoryDescriptions;
    /** The contextDetails property */
    contextDetails?: PlannerPlanContextDetailsCollection;
    /** The sharedWith property */
    sharedWith?: PlannerUserIds;
}
