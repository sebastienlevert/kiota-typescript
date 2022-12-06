import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketTaskBoardTaskFormat extends Entity, Partial<Parsable> {
    /** Hint used to order tasks in the bucket view of the task board. For details about the supported format, see Using order hints in Planner. */
    orderHint?: string;
}
