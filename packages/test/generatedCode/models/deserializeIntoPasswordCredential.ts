import {PasswordCredential} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordCredential(passwordCredential: PasswordCredential | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { passwordCredential.customKeyIdentifier = n.getStringValue() as any ; },
        "displayName": n => { passwordCredential.displayName = n.getStringValue() as any ; },
        "endDateTime": n => { passwordCredential.endDateTime = n.getDateValue() as any ; },
        "hint": n => { passwordCredential.hint = n.getStringValue() as any ; },
        "keyId": n => { passwordCredential.keyId = n.getStringValue() as any ; },
        "secretText": n => { passwordCredential.secretText = n.getStringValue() as any ; },
        "startDateTime": n => { passwordCredential.startDateTime = n.getDateValue() as any ; },
    }
}
