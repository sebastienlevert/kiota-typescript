import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharePointIdentitySet} from './deserializeIntoSharePointIdentitySet';
import {SharePointIdentitySetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointIdentitySetCollectionResponse(sharePointIdentitySetCollectionResponse: SharePointIdentitySetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharePointIdentitySetCollectionResponse),
        "value": n => { sharePointIdentitySetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharePointIdentitySet) as any ; },
    }
}
