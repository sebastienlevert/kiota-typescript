import {AssignedPlanCollectionResponse} from './index';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedPlanCollectionResponse(writer: SerializationWriter, assignedPlanCollectionResponse: AssignedPlanCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignedPlanCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", assignedPlanCollectionResponse.value as any, serializeAssignedPlan);
}
