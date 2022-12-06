import {Entity, RiskyUserHistoryItem} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUser extends Entity, Partial<Parsable> {
    /** The activity related to user risk level change */
    history?: RiskyUserHistoryItem[];
    /** Indicates whether the user is deleted. Possible values are: true, false. */
    isDeleted?: boolean;
    /** Indicates whether a user's risky state is being processed by the backend. */
    isProcessing?: boolean;
    /** Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    riskDetail?: RiskDetail;
    /** The date and time that the risky user was last updated.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    riskLastUpdatedDateTime?: Date;
    /** Level of the detected risky user. Possible values are: low, medium, high, hidden, none, unknownFutureValue. */
    riskLevel?: RiskLevel;
    /** State of the user's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. */
    riskState?: RiskState;
    /** Risky user display name. */
    userDisplayName?: string;
    /** Risky user principal name. */
    userPrincipalName?: string;
}
