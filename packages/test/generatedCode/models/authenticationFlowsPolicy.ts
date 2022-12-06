import {Entity, SelfServiceSignUpAuthenticationFlowConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicy extends Entity, Partial<Parsable> {
    /** Inherited property. A description of the policy. Optional. Read-only. */
    description?: string;
    /** Inherited property. The human-readable name of the policy. Optional. Read-only. */
    displayName?: string;
    /** Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. Optional. Read-only. */
    selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration;
}
