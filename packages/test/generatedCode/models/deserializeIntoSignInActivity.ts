import {SignInActivity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInActivity(signInActivity: SignInActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastNonInteractiveSignInDateTime": n => { signInActivity.lastNonInteractiveSignInDateTime = n.getDateValue() as any ; },
        "lastNonInteractiveSignInRequestId": n => { signInActivity.lastNonInteractiveSignInRequestId = n.getStringValue() as any ; },
        "lastSignInDateTime": n => { signInActivity.lastSignInDateTime = n.getDateValue() as any ; },
        "lastSignInRequestId": n => { signInActivity.lastSignInRequestId = n.getStringValue() as any ; },
    }
}
