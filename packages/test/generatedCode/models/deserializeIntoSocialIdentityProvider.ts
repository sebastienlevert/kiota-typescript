import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {SocialIdentityProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSocialIdentityProvider(socialIdentityProvider: SocialIdentityProvider | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(socialIdentityProvider),
        "clientId": n => { socialIdentityProvider.clientId = n.getStringValue() as any ; },
        "clientSecret": n => { socialIdentityProvider.clientSecret = n.getStringValue() as any ; },
        "identityProviderType": n => { socialIdentityProvider.identityProviderType = n.getStringValue() as any ; },
    }
}
