import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {PhoneAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoneAuthenticationMethod(writer: SerializationWriter, phoneAuthenticationMethod: PhoneAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, phoneAuthenticationMethod)
            writer.writeStringValue("phoneNumber", phoneAuthenticationMethod.phoneNumber);
            writer.writeEnumValue<AuthenticationPhoneType>("phoneType", phoneAuthenticationMethod.phoneType);
            writer.writeEnumValue<AuthenticationMethodSignInState>("smsSignInState", phoneAuthenticationMethod.smsSignInState);
}
