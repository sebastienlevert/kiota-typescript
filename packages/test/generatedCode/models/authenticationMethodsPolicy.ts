import {AuthenticationMethodConfiguration, Entity, RegistrationEnforcement} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicy extends Entity, Partial<Parsable> {
    /** Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy. */
    authenticationMethodConfigurations?: AuthenticationMethodConfiguration[];
    /** A description of the policy. Read-only. */
    description?: string;
    /** The name of the policy. Read-only. */
    displayName?: string;
    /** The date and time of the last update to the policy. Read-only. */
    lastModifiedDateTime?: Date;
    /** The version of the policy in use. Read-only. */
    policyVersion?: string;
    /** The reconfirmationInDays property */
    reconfirmationInDays?: number;
    /** Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods. */
    registrationEnforcement?: RegistrationEnforcement;
}
