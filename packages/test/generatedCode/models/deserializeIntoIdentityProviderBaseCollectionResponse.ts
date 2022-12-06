import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {IdentityProviderBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBaseCollectionResponse(identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderBaseCollectionResponse),
        "value": n => { identityProviderBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProviderBase) as any ; },
    }
}
