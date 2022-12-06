import {Entity, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucket extends Entity, Partial<Parsable> {
    /** Name of the bucket. */
    name?: string;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    orderHint?: string;
    /** Plan ID to which the bucket belongs. */
    planId?: string;
    /** Read-only. Nullable. The collection of tasks in the bucket. */
    tasks?: PlannerTask[];
}
