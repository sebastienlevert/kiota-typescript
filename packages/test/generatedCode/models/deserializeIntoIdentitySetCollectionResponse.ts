import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {IdentitySetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySetCollectionResponse(identitySetCollectionResponse: IdentitySetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identitySetCollectionResponse),
        "value": n => { identitySetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
    }
}
