import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCloudAppSecurityState} from './deserializeIntoCloudAppSecurityState';
import {CloudAppSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudAppSecurityStateCollectionResponse(cloudAppSecurityStateCollectionResponse: CloudAppSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(cloudAppSecurityStateCollectionResponse),
        "value": n => { cloudAppSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCloudAppSecurityState) as any ; },
    }
}
