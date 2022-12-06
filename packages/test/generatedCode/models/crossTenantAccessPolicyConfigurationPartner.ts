import {CrossTenantAccessPolicyB2BSetting, CrossTenantAccessPolicyInboundTrust} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationPartner extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration. */
    b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration. */
    b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect. */
    b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect. */
    b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting;
    /** Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations. */
    inboundTrust?: CrossTenantAccessPolicyInboundTrust;
    /** Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization. */
    isServiceProvider?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The tenant identifier for the partner Azure AD organization. Read-only. Key. */
    tenantId?: string;
}
