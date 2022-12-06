import {Planner} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerBucket} from './serializePlannerBucket';
import {serializePlannerPlan} from './serializePlannerPlan';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlanner(writer: SerializationWriter, planner: Planner | undefined = {}) : void {
        serializeEntity(writer, planner)
            writer.writeCollectionOfObjectValuesFromMethod("buckets", planner.buckets as any, serializePlannerBucket);
            writer.writeCollectionOfObjectValuesFromMethod("plans", planner.plans as any, serializePlannerPlan);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", planner.tasks as any, serializePlannerTask);
}
