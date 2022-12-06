import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityProvider} from './deserializeIntoIdentityProvider';
import {IdentityProviderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderCollectionResponse(identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderCollectionResponse),
        "value": n => { identityProviderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProvider) as any ; },
    }
}
