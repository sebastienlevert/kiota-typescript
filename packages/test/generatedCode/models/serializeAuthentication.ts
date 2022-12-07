import {Authentication} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeEmailAuthenticationMethod} from './serializeEmailAuthenticationMethod';
import {serializeEntity} from './serializeEntity';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {serializePasswordlessMicrosoftAuthenticatorAuthenticationMethod} from './serializePasswordlessMicrosoftAuthenticatorAuthenticationMethod';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from './serializeWindowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthentication(writer: SerializationWriter, authentication: Authentication | undefined = {}) : void {
        serializeEntity(writer, authentication)
            writer.writeCollectionOfObjectValuesFromMethod("emailMethods", authentication.emailMethods as any, serializeEmailAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("fido2Methods", authentication.fido2Methods as any, serializeFido2AuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("methods", authentication.methods as any, serializeAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("microsoftAuthenticatorMethods", authentication.microsoftAuthenticatorMethods as any, serializeMicrosoftAuthenticatorAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("operations", authentication.operations as any, serializeLongRunningOperation);
            writer.writeCollectionOfObjectValuesFromMethod("passwordlessMicrosoftAuthenticatorMethods", authentication.passwordlessMicrosoftAuthenticatorMethods as any, serializePasswordlessMicrosoftAuthenticatorAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("passwordMethods", authentication.passwordMethods as any, serializePasswordAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("phoneMethods", authentication.phoneMethods as any, serializePhoneAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("softwareOathMethods", authentication.softwareOathMethods as any, serializeSoftwareOathAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("temporaryAccessPassMethods", authentication.temporaryAccessPassMethods as any, serializeTemporaryAccessPassAuthenticationMethod);
            writer.writeCollectionOfObjectValuesFromMethod("windowsHelloForBusinessMethods", authentication.windowsHelloForBusinessMethods as any, serializeWindowsHelloForBusinessAuthenticationMethod);
}
