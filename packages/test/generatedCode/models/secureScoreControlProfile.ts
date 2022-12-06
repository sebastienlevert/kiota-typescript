import {ComplianceInformation, Entity, SecureScoreControlStateUpdate, SecurityVendorInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfile extends Entity, Partial<Parsable> {
    /** Control action type (Config, Review, Behavior). */
    actionType?: string;
    /** URL to where the control can be actioned. */
    actionUrl?: string;
    /** GUID string for tenant ID. */
    azureTenantId?: string;
    /** The complianceInformation property */
    complianceInformation?: ComplianceInformation[];
    /** Control action category (Identity, Data, Device, Apps, Infrastructure). */
    controlCategory?: string;
    /** The controlStateUpdates property */
    controlStateUpdates?: SecureScoreControlStateUpdate[];
    /** Flag to indicate if a control is depreciated. */
    deprecated?: boolean;
    /** Resource cost of implemmentating control (low, moderate, high). */
    implementationCost?: string;
    /** Time at which the control profile entity was last modified. The Timestamp type represents date and time */
    lastModifiedDateTime?: Date;
    /** max attainable score for the control. */
    maxScore?: number;
    /** Microsoft's stack ranking of control. */
    rank?: number;
    /** Description of what the control will help remediate. */
    remediation?: string;
    /** Description of the impact on users of the remediation. */
    remediationImpact?: string;
    /** Service that owns the control (Exchange, Sharepoint, Azure AD). */
    service?: string;
    /** List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage, */
    threats?: string[];
    /** The tier property */
    tier?: string;
    /** Title of the control. */
    title?: string;
    /** The userImpact property */
    userImpact?: string;
    /** The vendorInformation property */
    vendorInformation?: SecurityVendorInformation;
}
