import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodTarget extends Entity, Partial<Parsable> {
    /** Determines if the user is enforced to register the authentication method. */
    isRegistrationRequired?: boolean;
    /** The targetType property */
    targetType?: AuthenticationMethodTargetType;
}
