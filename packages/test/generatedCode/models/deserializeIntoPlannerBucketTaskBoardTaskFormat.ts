import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerBucketTaskBoardTaskFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketTaskBoardTaskFormat(plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucketTaskBoardTaskFormat),
        "orderHint": n => { plannerBucketTaskBoardTaskFormat.orderHint = n.getStringValue() as any ; },
    }
}
