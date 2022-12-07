import {KeyCredential} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyCredential(keyCredential: KeyCredential | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { keyCredential.customKeyIdentifier = n.getStringValue() as any ; },
        "displayName": n => { keyCredential.displayName = n.getStringValue() as any ; },
        "endDateTime": n => { keyCredential.endDateTime = n.getDateValue() as any ; },
        "key": n => { keyCredential.key = n.getStringValue() as any ; },
        "keyId": n => { keyCredential.keyId = n.getStringValue() as any ; },
        "startDateTime": n => { keyCredential.startDateTime = n.getDateValue() as any ; },
        "type": n => { keyCredential.type = n.getStringValue() as any ; },
        "usage": n => { keyCredential.usage = n.getStringValue() as any ; },
    }
}
