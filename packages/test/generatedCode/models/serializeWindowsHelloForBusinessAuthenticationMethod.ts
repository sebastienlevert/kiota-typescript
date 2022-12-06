import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {WindowsHelloForBusinessAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsHelloForBusinessAuthenticationMethod(writer: SerializationWriter, windowsHelloForBusinessAuthenticationMethod: WindowsHelloForBusinessAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, windowsHelloForBusinessAuthenticationMethod)
            writer.writeDateValue("createdDateTime", windowsHelloForBusinessAuthenticationMethod.createdDateTime);
            writer.writeObjectValueFromMethod("device", windowsHelloForBusinessAuthenticationMethod.device as any, serializeDevice);
            writer.writeStringValue("displayName", windowsHelloForBusinessAuthenticationMethod.displayName);
            writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", windowsHelloForBusinessAuthenticationMethod.keyStrength);
}
