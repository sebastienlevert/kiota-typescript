import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsHelloForBusinessAuthenticationMethod(windowsHelloForBusinessAuthenticationMethod: WindowsHelloForBusinessAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(windowsHelloForBusinessAuthenticationMethod),
        "createdDateTime": n => { windowsHelloForBusinessAuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "device": n => { windowsHelloForBusinessAuthenticationMethod.device = n.getObject(deserializeIntoDevice) as any ; },
        "displayName": n => { windowsHelloForBusinessAuthenticationMethod.displayName = n.getStringValue() as any ; },
        "keyStrength": n => { windowsHelloForBusinessAuthenticationMethod.keyStrength = n.getEnumValue<AuthenticationMethodKeyStrength>(AuthenticationMethodKeyStrength) as any ; },
    }
}
