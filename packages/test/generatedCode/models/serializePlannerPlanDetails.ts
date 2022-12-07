import {PlannerPlanDetails} from './index';
import {serializePlannerCategoryDescriptions} from './serializePlannerCategoryDescriptions';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerPlanContextDetailsCollection} from './serializePlannerPlanContextDetailsCollection';
import {serializePlannerUserIds} from './serializePlannerUserIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanDetails(writer: SerializationWriter, plannerPlanDetails: PlannerPlanDetails | undefined = {}) : void {
        serializePlannerDelta(writer, plannerPlanDetails)
            writer.writeObjectValueFromMethod("categoryDescriptions", plannerPlanDetails.categoryDescriptions as any, serializePlannerCategoryDescriptions);
            writer.writeObjectValueFromMethod("contextDetails", plannerPlanDetails.contextDetails as any, serializePlannerPlanContextDetailsCollection);
            writer.writeObjectValueFromMethod("sharedWith", plannerPlanDetails.sharedWith as any, serializePlannerUserIds);
}
