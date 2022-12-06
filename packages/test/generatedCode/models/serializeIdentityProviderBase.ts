import {IdentityProviderBase} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBase(writer: SerializationWriter, identityProviderBase: IdentityProviderBase | undefined = {}) : void {
        serializeEntity(writer, identityProviderBase)
            writer.writeStringValue("displayName", identityProviderBase.displayName);
}
