import {KeyCredential} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyCredential(writer: SerializationWriter, keyCredential: KeyCredential | undefined = {}) : void {
            writer.writeStringValue("customKeyIdentifier", keyCredential.customKeyIdentifier);
            writer.writeStringValue("displayName", keyCredential.displayName);
            writer.writeDateValue("endDateTime", keyCredential.endDateTime);
            writer.writeStringValue("key", keyCredential.key);
            writer.writeStringValue("keyId", keyCredential.keyId);
            writer.writeDateValue("startDateTime", keyCredential.startDateTime);
            writer.writeStringValue("type", keyCredential.type);
            writer.writeStringValue("usage", keyCredential.usage);
}
