import {ExternalEmailOtpState} from './externalEmailOtpState';
import {AuthenticationMethodConfiguration, AuthenticationMethodTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Partial<Parsable> {
    /** Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled, disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email OTP enabled beginning in October 2021. */
    allowExternalIdToUseEmailOtp?: ExternalEmailOtpState;
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: AuthenticationMethodTarget[];
}
