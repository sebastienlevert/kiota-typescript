import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {PhoneAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoneAuthenticationMethod(phoneAuthenticationMethod: PhoneAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(phoneAuthenticationMethod),
        "phoneNumber": n => { phoneAuthenticationMethod.phoneNumber = n.getStringValue() as any ; },
        "phoneType": n => { phoneAuthenticationMethod.phoneType = n.getEnumValue<AuthenticationPhoneType>(AuthenticationPhoneType) as any ; },
        "smsSignInState": n => { phoneAuthenticationMethod.smsSignInState = n.getEnumValue<AuthenticationMethodSignInState>(AuthenticationMethodSignInState) as any ; },
    }
}
