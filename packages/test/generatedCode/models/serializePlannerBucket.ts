import {PlannerBucket} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucket(writer: SerializationWriter, plannerBucket: PlannerBucket | undefined = {}) : void {
        serializeEntity(writer, plannerBucket)
            writer.writeStringValue("name", plannerBucket.name);
            writer.writeStringValue("orderHint", plannerBucket.orderHint);
            writer.writeStringValue("planId", plannerBucket.planId);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", plannerBucket.tasks as any, serializePlannerTask);
}
