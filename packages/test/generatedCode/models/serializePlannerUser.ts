import {PlannerUser} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerPlan} from './serializePlannerPlan';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerUser(writer: SerializationWriter, plannerUser: PlannerUser | undefined = {}) : void {
        serializeEntity(writer, plannerUser)
            writer.writeCollectionOfObjectValuesFromMethod("plans", plannerUser.plans as any, serializePlannerPlan);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", plannerUser.tasks as any, serializePlannerTask);
}
