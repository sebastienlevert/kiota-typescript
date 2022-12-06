import {SignInStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInStatus(signInStatus: SignInStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDetails": n => { signInStatus.additionalDetails = n.getStringValue() as any ; },
        "errorCode": n => { signInStatus.errorCode = n.getNumberValue() as any ; },
        "failureReason": n => { signInStatus.failureReason = n.getStringValue() as any ; },
        "@odata.type": n => { signInStatus.odataType = n.getStringValue() as any ; },
    }
}
