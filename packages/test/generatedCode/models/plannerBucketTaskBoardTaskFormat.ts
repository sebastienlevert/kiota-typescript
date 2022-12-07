import {PlannerDelta} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketTaskBoardTaskFormat extends Partial<Parsable>, PlannerDelta {
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    orderHint?: string;
}
