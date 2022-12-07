import {PlannerBucketTaskBoardTaskFormat} from './index';
import {serializePlannerDelta} from './serializePlannerDelta';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketTaskBoardTaskFormat(writer: SerializationWriter, plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {}) : void {
        serializePlannerDelta(writer, plannerBucketTaskBoardTaskFormat)
            writer.writeStringValue("orderHint", plannerBucketTaskBoardTaskFormat.orderHint);
}
