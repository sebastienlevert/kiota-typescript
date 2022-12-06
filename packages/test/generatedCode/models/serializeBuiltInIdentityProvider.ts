import {BuiltInIdentityProvider} from './index';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBuiltInIdentityProvider(writer: SerializationWriter, builtInIdentityProvider: BuiltInIdentityProvider | undefined = {}) : void {
        serializeIdentityProviderBase(writer, builtInIdentityProvider)
            writer.writeStringValue("identityProviderType", builtInIdentityProvider.identityProviderType);
}
