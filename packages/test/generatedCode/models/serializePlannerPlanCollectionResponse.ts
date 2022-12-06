import {PlannerPlanCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerPlan} from './serializePlannerPlan';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanCollectionResponse(writer: SerializationWriter, plannerPlanCollectionResponse: PlannerPlanCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerPlanCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", plannerPlanCollectionResponse.value as any, serializePlannerPlan);
}
