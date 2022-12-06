import {WorkforceIntegrationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkforceIntegrationCollectionResponse(writer: SerializationWriter, workforceIntegrationCollectionResponse: WorkforceIntegrationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workforceIntegrationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workforceIntegrationCollectionResponse.value as any, serializeWorkforceIntegration);
}
