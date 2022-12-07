import {PlannerPlan} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerBucket} from './serializePlannerBucket';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerPlanContainer} from './serializePlannerPlanContainer';
import {serializePlannerPlanContextCollection} from './serializePlannerPlanContextCollection';
import {serializePlannerPlanCreation} from './serializePlannerPlanCreation';
import {serializePlannerPlanDetails} from './serializePlannerPlanDetails';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlan(writer: SerializationWriter, plannerPlan: PlannerPlan | undefined = {}) : void {
        serializePlannerDelta(writer, plannerPlan)
            writer.writeCollectionOfObjectValuesFromMethod("buckets", plannerPlan.buckets as any, serializePlannerBucket);
            writer.writeObjectValueFromMethod("container", plannerPlan.container as any, serializePlannerPlanContainer);
            writer.writeObjectValueFromMethod("contexts", plannerPlan.contexts as any, serializePlannerPlanContextCollection);
            writer.writeObjectValueFromMethod("createdBy", plannerPlan.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", plannerPlan.createdDateTime);
            writer.writeObjectValueFromMethod("creationSource", plannerPlan.creationSource as any, serializePlannerPlanCreation);
            writer.writeObjectValueFromMethod("details", plannerPlan.details as any, serializePlannerPlanDetails);
            writer.writeStringValue("owner", plannerPlan.owner);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", plannerPlan.tasks as any, serializePlannerTask);
            writer.writeStringValue("title", plannerPlan.title);
}
