import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerOrderHintsByAssignee} from './deserializeIntoPlannerOrderHintsByAssignee';
import {PlannerAssignedToTaskBoardTaskFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAssignedToTaskBoardTaskFormat(plannerAssignedToTaskBoardTaskFormat: PlannerAssignedToTaskBoardTaskFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerAssignedToTaskBoardTaskFormat),
        "orderHintsByAssignee": n => { plannerAssignedToTaskBoardTaskFormat.orderHintsByAssignee = n.getObject(deserializeIntoPlannerOrderHintsByAssignee) as any ; },
        "unassignedOrderHint": n => { plannerAssignedToTaskBoardTaskFormat.unassignedOrderHint = n.getStringValue() as any ; },
    }
}
