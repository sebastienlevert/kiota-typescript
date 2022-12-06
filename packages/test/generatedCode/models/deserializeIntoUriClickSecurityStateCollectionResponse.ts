import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUriClickSecurityState} from './deserializeIntoUriClickSecurityState';
import {UriClickSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUriClickSecurityStateCollectionResponse(uriClickSecurityStateCollectionResponse: UriClickSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(uriClickSecurityStateCollectionResponse),
        "value": n => { uriClickSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUriClickSecurityState) as any ; },
    }
}
