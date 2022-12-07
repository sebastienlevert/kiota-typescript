import {PlannerAssignedToTaskBoardTaskFormat} from './index';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerOrderHintsByAssignee} from './serializePlannerOrderHintsByAssignee';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerAssignedToTaskBoardTaskFormat(writer: SerializationWriter, plannerAssignedToTaskBoardTaskFormat: PlannerAssignedToTaskBoardTaskFormat | undefined = {}) : void {
        serializePlannerDelta(writer, plannerAssignedToTaskBoardTaskFormat)
            writer.writeObjectValueFromMethod("orderHintsByAssignee", plannerAssignedToTaskBoardTaskFormat.orderHintsByAssignee as any, serializePlannerOrderHintsByAssignee);
            writer.writeStringValue("unassignedOrderHint", plannerAssignedToTaskBoardTaskFormat.unassignedOrderHint);
}
