import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnPremisesProvisioningError} from './deserializeIntoOnPremisesProvisioningError';
import {OnPremisesProvisioningErrorCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesProvisioningErrorCollectionResponse(onPremisesProvisioningErrorCollectionResponse: OnPremisesProvisioningErrorCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onPremisesProvisioningErrorCollectionResponse),
        "value": n => { onPremisesProvisioningErrorCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnPremisesProvisioningError) as any ; },
    }
}
