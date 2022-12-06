import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSocialIdentityProvider} from './deserializeIntoSocialIdentityProvider';
import {SocialIdentityProviderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSocialIdentityProviderCollectionResponse(socialIdentityProviderCollectionResponse: SocialIdentityProviderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(socialIdentityProviderCollectionResponse),
        "value": n => { socialIdentityProviderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSocialIdentityProvider) as any ; },
    }
}
