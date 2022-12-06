import {PlannerBucketTaskBoardTaskFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketTaskBoardTaskFormat(writer: SerializationWriter, plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {}) : void {
        serializeEntity(writer, plannerBucketTaskBoardTaskFormat)
            writer.writeStringValue("orderHint", plannerBucketTaskBoardTaskFormat.orderHint);
}
