import {PlannerDelta} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerDelta(writer: SerializationWriter, plannerDelta: PlannerDelta | undefined = {}) : void {
        serializeEntity(writer, plannerDelta)
}
