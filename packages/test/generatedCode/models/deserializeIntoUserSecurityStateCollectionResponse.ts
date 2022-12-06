import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserSecurityState} from './deserializeIntoUserSecurityState';
import {UserSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSecurityStateCollectionResponse(userSecurityStateCollectionResponse: UserSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userSecurityStateCollectionResponse),
        "value": n => { userSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSecurityState) as any ; },
    }
}
