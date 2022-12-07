import {PlannerBucket} from './index';
import {serializePlannerBucketCreation} from './serializePlannerBucketCreation';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucket(writer: SerializationWriter, plannerBucket: PlannerBucket | undefined = {}) : void {
        serializePlannerDelta(writer, plannerBucket)
            writer.writeObjectValueFromMethod("creationSource", plannerBucket.creationSource as any, serializePlannerBucketCreation);
            writer.writeStringValue("name", plannerBucket.name);
            writer.writeStringValue("orderHint", plannerBucket.orderHint);
            writer.writeStringValue("planId", plannerBucket.planId);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", plannerBucket.tasks as any, serializePlannerTask);
}
