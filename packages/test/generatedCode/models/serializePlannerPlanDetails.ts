import {PlannerPlanDetails} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerCategoryDescriptions} from './serializePlannerCategoryDescriptions';
import {serializePlannerUserIds} from './serializePlannerUserIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanDetails(writer: SerializationWriter, plannerPlanDetails: PlannerPlanDetails | undefined = {}) : void {
        serializeEntity(writer, plannerPlanDetails)
            writer.writeObjectValueFromMethod("categoryDescriptions", plannerPlanDetails.categoryDescriptions as any, serializePlannerCategoryDescriptions);
            writer.writeObjectValueFromMethod("sharedWith", plannerPlanDetails.sharedWith as any, serializePlannerUserIds);
}
