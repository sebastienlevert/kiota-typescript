import {SelfSignedCertificate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSelfSignedCertificate(selfSignedCertificate: SelfSignedCertificate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { selfSignedCertificate.customKeyIdentifier = n.getStringValue() as any ; },
        "displayName": n => { selfSignedCertificate.displayName = n.getStringValue() as any ; },
        "endDateTime": n => { selfSignedCertificate.endDateTime = n.getDateValue() as any ; },
        "key": n => { selfSignedCertificate.key = n.getStringValue() as any ; },
        "keyId": n => { selfSignedCertificate.keyId = n.getStringValue() as any ; },
        "@odata.type": n => { selfSignedCertificate.odataType = n.getStringValue() as any ; },
        "startDateTime": n => { selfSignedCertificate.startDateTime = n.getDateValue() as any ; },
        "thumbprint": n => { selfSignedCertificate.thumbprint = n.getStringValue() as any ; },
        "type": n => { selfSignedCertificate.type = n.getStringValue() as any ; },
        "usage": n => { selfSignedCertificate.usage = n.getStringValue() as any ; },
    }
}
