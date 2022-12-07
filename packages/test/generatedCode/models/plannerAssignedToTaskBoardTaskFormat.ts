import {PlannerDelta, PlannerOrderHintsByAssignee} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerAssignedToTaskBoardTaskFormat extends Partial<Parsable>, PlannerDelta {
    /** The orderHintsByAssignee property */
    orderHintsByAssignee?: PlannerOrderHintsByAssignee;
    /** Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here. */
    unassignedOrderHint?: string;
}
