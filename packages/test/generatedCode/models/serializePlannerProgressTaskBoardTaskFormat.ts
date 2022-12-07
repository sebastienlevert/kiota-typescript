import {PlannerProgressTaskBoardTaskFormat} from './index';
import {serializePlannerDelta} from './serializePlannerDelta';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerProgressTaskBoardTaskFormat(writer: SerializationWriter, plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {}) : void {
        serializePlannerDelta(writer, plannerProgressTaskBoardTaskFormat)
            writer.writeStringValue("orderHint", plannerProgressTaskBoardTaskFormat.orderHint);
}
