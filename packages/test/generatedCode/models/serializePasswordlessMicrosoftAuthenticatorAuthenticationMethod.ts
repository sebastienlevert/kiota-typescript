import {PasswordlessMicrosoftAuthenticatorAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordlessMicrosoftAuthenticatorAuthenticationMethod(writer: SerializationWriter, passwordlessMicrosoftAuthenticatorAuthenticationMethod: PasswordlessMicrosoftAuthenticatorAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, passwordlessMicrosoftAuthenticatorAuthenticationMethod)
            writer.writeDateValue("createdDateTime", passwordlessMicrosoftAuthenticatorAuthenticationMethod.createdDateTime);
            writer.writeDateValue("creationDateTime", passwordlessMicrosoftAuthenticatorAuthenticationMethod.creationDateTime);
            writer.writeObjectValueFromMethod("device", passwordlessMicrosoftAuthenticatorAuthenticationMethod.device as any, serializeDevice);
            writer.writeStringValue("displayName", passwordlessMicrosoftAuthenticatorAuthenticationMethod.displayName);
}
