import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {ConditionalAccessApplications, ConditionalAccessClientApplications, ConditionalAccessDevices, ConditionalAccessLocations, ConditionalAccessPlatforms, ConditionalAccessUsers} from './index';
import {RiskLevel} from './riskLevel';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessConditionSet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Applications and user actions included in and excluded from the policy. Required. */
    applications?: ConditionalAccessApplications;
    /** Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. */
    clientApplications?: ConditionalAccessClientApplications;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required. */
    clientAppTypes?: ConditionalAccessClientApp[];
    /** Devices in the policy. */
    devices?: ConditionalAccessDevices;
    /** Locations included in and excluded from the policy. */
    locations?: ConditionalAccessLocations;
    /** The OdataType property */
    odataType?: string;
    /** Platforms included in and excluded from the policy. */
    platforms?: ConditionalAccessPlatforms;
    /** Service principal risk levels included in the policy. Possible values are: low, medium, high, none, unknownFutureValue. */
    servicePrincipalRiskLevels?: RiskLevel[];
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    signInRiskLevels?: RiskLevel[];
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    userRiskLevels?: RiskLevel[];
    /** Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required. */
    users?: ConditionalAccessUsers;
}
