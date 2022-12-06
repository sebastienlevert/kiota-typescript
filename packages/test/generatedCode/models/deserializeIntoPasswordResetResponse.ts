import {PasswordResetResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordResetResponse(passwordResetResponse: PasswordResetResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newPassword": n => { passwordResetResponse.newPassword = n.getStringValue() as any ; },
        "@odata.type": n => { passwordResetResponse.odataType = n.getStringValue() as any ; },
    }
}
