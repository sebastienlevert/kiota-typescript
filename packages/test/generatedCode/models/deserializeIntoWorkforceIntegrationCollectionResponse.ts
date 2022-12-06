import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkforceIntegration} from './deserializeIntoWorkforceIntegration';
import {WorkforceIntegrationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationCollectionResponse(workforceIntegrationCollectionResponse: WorkforceIntegrationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workforceIntegrationCollectionResponse),
        "value": n => { workforceIntegrationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkforceIntegration) as any ; },
    }
}
