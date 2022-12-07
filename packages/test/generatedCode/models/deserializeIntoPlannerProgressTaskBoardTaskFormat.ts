import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {PlannerProgressTaskBoardTaskFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerProgressTaskBoardTaskFormat(plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerProgressTaskBoardTaskFormat),
        "orderHint": n => { plannerProgressTaskBoardTaskFormat.orderHint = n.getStringValue() as any ; },
    }
}
