import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {AuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The phone number to text or call for authentication. Phone numbers use the format '+<country code> <number>x<extension>', with extension optional. For example, +1 5555551234 or +1 5555551234x123 are valid. Numbers are rejected when creating/updating if they do not match the required format. */
    phoneNumber?: string;
    /** The phoneType property */
    phoneType?: AuthenticationPhoneType;
    /** The smsSignInState property */
    smsSignInState?: AuthenticationMethodSignInState;
}
