import {AuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The email address registered to this user. */
    emailAddress?: string;
}
