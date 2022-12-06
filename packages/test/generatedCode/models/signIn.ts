import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {AppliedConditionalAccessPolicy, DeviceDetail, Entity, SignInLocation, SignInStatus} from './index';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignIn extends Entity, Partial<Parsable> {
    /** App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only). */
    appDisplayName?: string;
    /** Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only). */
    appId?: string;
    /** The appliedConditionalAccessPolicies property */
    appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[];
    /** Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only). */
    clientAppUsed?: string;
    /** Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only). */
    conditionalAccessStatus?: ConditionalAccessStatus;
    /** The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only). */
    correlationId?: string;
    /** Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only). */
    createdDateTime?: Date;
    /** Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties. */
    deviceDetail?: DeviceDetail;
    /** IP address of the client used to sign in. Supports $filter (eq and startsWith operators only). */
    ipAddress?: string;
    /** Indicates if a sign-in is interactive or not. */
    isInteractive?: boolean;
    /** Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties. */
    location?: SignInLocation;
    /** Name of the resource the user signed into. Supports $filter (eq operator only). */
    resourceDisplayName?: string;
    /** ID of the resource that the user signed into. Supports $filter (eq operator only). */
    resourceId?: string;
    /** Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden. */
    riskDetail?: RiskDetail;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only). */
    riskEventTypes?: RiskEventType[];
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only). */
    riskEventTypes_v2?: string[];
    /** Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden. */
    riskLevelAggregated?: RiskLevel;
    /** Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden. */
    riskLevelDuringSignIn?: RiskLevel;
    /** Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only). */
    riskState?: RiskState;
    /** Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property. */
    status?: SignInStatus;
    /** Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only). */
    userDisplayName?: string;
    /** ID of the user that initiated the sign-in. Supports $filter (eq operator only). */
    userId?: string;
    /** User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only). */
    userPrincipalName?: string;
}
