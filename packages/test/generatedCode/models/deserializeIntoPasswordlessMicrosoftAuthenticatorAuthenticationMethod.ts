import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {PasswordlessMicrosoftAuthenticatorAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordlessMicrosoftAuthenticatorAuthenticationMethod(passwordlessMicrosoftAuthenticatorAuthenticationMethod: PasswordlessMicrosoftAuthenticatorAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(passwordlessMicrosoftAuthenticatorAuthenticationMethod),
        "createdDateTime": n => { passwordlessMicrosoftAuthenticatorAuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "creationDateTime": n => { passwordlessMicrosoftAuthenticatorAuthenticationMethod.creationDateTime = n.getDateValue() as any ; },
        "device": n => { passwordlessMicrosoftAuthenticatorAuthenticationMethod.device = n.getObject(deserializeIntoDevice) as any ; },
        "displayName": n => { passwordlessMicrosoftAuthenticatorAuthenticationMethod.displayName = n.getStringValue() as any ; },
    }
}
