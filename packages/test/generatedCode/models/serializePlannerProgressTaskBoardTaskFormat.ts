import {PlannerProgressTaskBoardTaskFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerProgressTaskBoardTaskFormat(writer: SerializationWriter, plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {}) : void {
        serializeEntity(writer, plannerProgressTaskBoardTaskFormat)
            writer.writeStringValue("orderHint", plannerProgressTaskBoardTaskFormat.orderHint);
}
