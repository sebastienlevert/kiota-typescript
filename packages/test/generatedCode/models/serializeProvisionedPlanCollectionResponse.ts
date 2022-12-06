import {ProvisionedPlanCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionedPlanCollectionResponse(writer: SerializationWriter, provisionedPlanCollectionResponse: ProvisionedPlanCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, provisionedPlanCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", provisionedPlanCollectionResponse.value as any, serializeProvisionedPlan);
}
