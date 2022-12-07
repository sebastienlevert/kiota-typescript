import {PasswordCredential} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordCredential(writer: SerializationWriter, passwordCredential: PasswordCredential | undefined = {}) : void {
            writer.writeStringValue("customKeyIdentifier", passwordCredential.customKeyIdentifier);
            writer.writeStringValue("displayName", passwordCredential.displayName);
            writer.writeDateValue("endDateTime", passwordCredential.endDateTime);
            writer.writeStringValue("hint", passwordCredential.hint);
            writer.writeStringValue("keyId", passwordCredential.keyId);
            writer.writeStringValue("secretText", passwordCredential.secretText);
            writer.writeDateValue("startDateTime", passwordCredential.startDateTime);
}
