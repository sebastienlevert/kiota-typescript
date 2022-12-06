import {Entity, PlannerOrderHintsByAssignee} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerAssignedToTaskBoardTaskFormat extends Entity, Partial<Parsable> {
    /** Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here. */
    orderHintsByAssignee?: PlannerOrderHintsByAssignee;
    /** Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here. */
    unassignedOrderHint?: string;
}
