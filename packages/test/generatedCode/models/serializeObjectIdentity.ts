import {ObjectIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectIdentity(writer: SerializationWriter, objectIdentity: ObjectIdentity | undefined = {}) : void {
            writer.writeStringValue("issuer", objectIdentity.issuer);
            writer.writeStringValue("issuerAssignedId", objectIdentity.issuerAssignedId);
            writer.writeStringValue("signInType", objectIdentity.signInType);
}
