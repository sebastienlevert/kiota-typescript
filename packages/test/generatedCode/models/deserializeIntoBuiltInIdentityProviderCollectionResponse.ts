import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBuiltInIdentityProvider} from './deserializeIntoBuiltInIdentityProvider';
import {BuiltInIdentityProviderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBuiltInIdentityProviderCollectionResponse(builtInIdentityProviderCollectionResponse: BuiltInIdentityProviderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(builtInIdentityProviderCollectionResponse),
        "value": n => { builtInIdentityProviderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBuiltInIdentityProvider) as any ; },
    }
}
