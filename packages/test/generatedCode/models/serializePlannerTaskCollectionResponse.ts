import {PlannerTaskCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskCollectionResponse(writer: SerializationWriter, plannerTaskCollectionResponse: PlannerTaskCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerTaskCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", plannerTaskCollectionResponse.value as any, serializePlannerTask);
}
