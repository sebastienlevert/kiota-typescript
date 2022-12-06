import {Entity, TermsAndConditions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatus extends Entity, Partial<Parsable> {
    /** DateTime when the terms were last accepted by the user. */
    acceptedDateTime?: Date;
    /** Most recent version number of the T&C accepted by the user. */
    acceptedVersion?: number;
    /** Navigation link to the terms and conditions that are assigned. */
    termsAndConditions?: TermsAndConditions;
    /** Display name of the user whose acceptance the entity represents. */
    userDisplayName?: string;
    /** The userPrincipalName of the User that accepted the term. */
    userPrincipalName?: string;
}
