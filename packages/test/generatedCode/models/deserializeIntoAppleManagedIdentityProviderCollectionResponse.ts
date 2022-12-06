import {deserializeIntoAppleManagedIdentityProvider} from './deserializeIntoAppleManagedIdentityProvider';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppleManagedIdentityProviderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleManagedIdentityProviderCollectionResponse(appleManagedIdentityProviderCollectionResponse: AppleManagedIdentityProviderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appleManagedIdentityProviderCollectionResponse),
        "value": n => { appleManagedIdentityProviderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppleManagedIdentityProvider) as any ; },
    }
}
