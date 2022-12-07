import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {PlannerBucketTaskBoardTaskFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketTaskBoardTaskFormat(plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerBucketTaskBoardTaskFormat),
        "orderHint": n => { plannerBucketTaskBoardTaskFormat.orderHint = n.getStringValue() as any ; },
    }
}
