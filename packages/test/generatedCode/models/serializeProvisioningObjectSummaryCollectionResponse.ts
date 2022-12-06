import {ProvisioningObjectSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProvisioningObjectSummary} from './serializeProvisioningObjectSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningObjectSummaryCollectionResponse(writer: SerializationWriter, provisioningObjectSummaryCollectionResponse: ProvisioningObjectSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, provisioningObjectSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", provisioningObjectSummaryCollectionResponse.value as any, serializeProvisioningObjectSummary);
}
