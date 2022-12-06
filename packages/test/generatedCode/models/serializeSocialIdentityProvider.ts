import {SocialIdentityProvider} from './index';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSocialIdentityProvider(writer: SerializationWriter, socialIdentityProvider: SocialIdentityProvider | undefined = {}) : void {
        serializeIdentityProviderBase(writer, socialIdentityProvider)
            writer.writeStringValue("clientId", socialIdentityProvider.clientId);
            writer.writeStringValue("clientSecret", socialIdentityProvider.clientSecret);
            writer.writeStringValue("identityProviderType", socialIdentityProvider.identityProviderType);
}
