import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {MicrosoftAuthenticatorAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethod(microsoftAuthenticatorAuthenticationMethod: MicrosoftAuthenticatorAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(microsoftAuthenticatorAuthenticationMethod),
        "createdDateTime": n => { microsoftAuthenticatorAuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "device": n => { microsoftAuthenticatorAuthenticationMethod.device = n.getObject(deserializeIntoDevice) as any ; },
        "deviceTag": n => { microsoftAuthenticatorAuthenticationMethod.deviceTag = n.getStringValue() as any ; },
        "displayName": n => { microsoftAuthenticatorAuthenticationMethod.displayName = n.getStringValue() as any ; },
        "phoneAppVersion": n => { microsoftAuthenticatorAuthenticationMethod.phoneAppVersion = n.getStringValue() as any ; },
    }
}
