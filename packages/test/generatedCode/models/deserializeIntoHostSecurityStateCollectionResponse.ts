import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoHostSecurityState} from './deserializeIntoHostSecurityState';
import {HostSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostSecurityStateCollectionResponse(hostSecurityStateCollectionResponse: HostSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostSecurityStateCollectionResponse),
        "value": n => { hostSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHostSecurityState) as any ; },
    }
}
