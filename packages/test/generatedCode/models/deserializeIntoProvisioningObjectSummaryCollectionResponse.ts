import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProvisioningObjectSummary} from './deserializeIntoProvisioningObjectSummary';
import {ProvisioningObjectSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningObjectSummaryCollectionResponse(provisioningObjectSummaryCollectionResponse: ProvisioningObjectSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(provisioningObjectSummaryCollectionResponse),
        "value": n => { provisioningObjectSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisioningObjectSummary) as any ; },
    }
}
