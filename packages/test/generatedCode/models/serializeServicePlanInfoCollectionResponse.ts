import {ServicePlanInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePlanInfoCollectionResponse(writer: SerializationWriter, servicePlanInfoCollectionResponse: ServicePlanInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, servicePlanInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", servicePlanInfoCollectionResponse.value as any, serializeServicePlanInfo);
}
