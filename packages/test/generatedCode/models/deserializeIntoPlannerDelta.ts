import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerDelta} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerDelta(plannerDelta: PlannerDelta | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerDelta),
    }
}
