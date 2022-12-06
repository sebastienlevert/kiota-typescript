import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProvisioningStep} from './deserializeIntoProvisioningStep';
import {ProvisioningStepCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningStepCollectionResponse(provisioningStepCollectionResponse: ProvisioningStepCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(provisioningStepCollectionResponse),
        "value": n => { provisioningStepCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisioningStep) as any ; },
    }
}
