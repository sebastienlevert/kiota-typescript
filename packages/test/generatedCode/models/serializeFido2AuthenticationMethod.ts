import {AttestationLevel} from './attestationLevel';
import {Fido2AuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethod(writer: SerializationWriter, fido2AuthenticationMethod: Fido2AuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, fido2AuthenticationMethod)
            writer.writeStringValue("aaGuid", fido2AuthenticationMethod.aaGuid);
            writer.writeCollectionOfPrimitiveValues<string>("attestationCertificates", fido2AuthenticationMethod.attestationCertificates);
            writer.writeEnumValue<AttestationLevel>("attestationLevel", fido2AuthenticationMethod.attestationLevel);
            writer.writeDateValue("createdDateTime", fido2AuthenticationMethod.createdDateTime);
            writer.writeDateValue("creationDateTime", fido2AuthenticationMethod.creationDateTime);
            writer.writeStringValue("displayName", fido2AuthenticationMethod.displayName);
            writer.writeStringValue("model", fido2AuthenticationMethod.model);
}
