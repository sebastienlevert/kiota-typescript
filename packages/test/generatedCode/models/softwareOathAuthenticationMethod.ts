import {AuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The secret key of the method. Always returns null. */
    secretKey?: string;
}
