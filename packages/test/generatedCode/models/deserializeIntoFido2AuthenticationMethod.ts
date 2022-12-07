import {AttestationLevel} from './attestationLevel';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {Fido2AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethod(fido2AuthenticationMethod: Fido2AuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(fido2AuthenticationMethod),
        "aaGuid": n => { fido2AuthenticationMethod.aaGuid = n.getStringValue() as any ; },
        "attestationCertificates": n => { fido2AuthenticationMethod.attestationCertificates = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "attestationLevel": n => { fido2AuthenticationMethod.attestationLevel = n.getEnumValue<AttestationLevel>(AttestationLevel) as any ; },
        "createdDateTime": n => { fido2AuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "creationDateTime": n => { fido2AuthenticationMethod.creationDateTime = n.getDateValue() as any ; },
        "displayName": n => { fido2AuthenticationMethod.displayName = n.getStringValue() as any ; },
        "model": n => { fido2AuthenticationMethod.model = n.getStringValue() as any ; },
    }
}
