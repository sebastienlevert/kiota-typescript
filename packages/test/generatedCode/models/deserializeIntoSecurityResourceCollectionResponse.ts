import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSecurityResource} from './deserializeIntoSecurityResource';
import {SecurityResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityResourceCollectionResponse(securityResourceCollectionResponse: SecurityResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(securityResourceCollectionResponse),
        "value": n => { securityResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecurityResource) as any ; },
    }
}
