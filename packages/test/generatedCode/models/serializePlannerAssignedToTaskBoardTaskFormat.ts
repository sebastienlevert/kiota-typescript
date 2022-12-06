import {PlannerAssignedToTaskBoardTaskFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerOrderHintsByAssignee} from './serializePlannerOrderHintsByAssignee';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerAssignedToTaskBoardTaskFormat(writer: SerializationWriter, plannerAssignedToTaskBoardTaskFormat: PlannerAssignedToTaskBoardTaskFormat | undefined = {}) : void {
        serializeEntity(writer, plannerAssignedToTaskBoardTaskFormat)
            writer.writeObjectValueFromMethod("orderHintsByAssignee", plannerAssignedToTaskBoardTaskFormat.orderHintsByAssignee as any, serializePlannerOrderHintsByAssignee);
            writer.writeStringValue("unassignedOrderHint", plannerAssignedToTaskBoardTaskFormat.unassignedOrderHint);
}
