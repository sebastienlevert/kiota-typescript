import {MicrosoftAuthenticatorAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethod(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethod: MicrosoftAuthenticatorAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, microsoftAuthenticatorAuthenticationMethod)
            writer.writeDateValue("createdDateTime", microsoftAuthenticatorAuthenticationMethod.createdDateTime);
            writer.writeObjectValueFromMethod("device", microsoftAuthenticatorAuthenticationMethod.device as any, serializeDevice);
            writer.writeStringValue("deviceTag", microsoftAuthenticatorAuthenticationMethod.deviceTag);
            writer.writeStringValue("displayName", microsoftAuthenticatorAuthenticationMethod.displayName);
            writer.writeStringValue("phoneAppVersion", microsoftAuthenticatorAuthenticationMethod.phoneAppVersion);
}
