import {CrossTenantAccessPolicyB2BSetting, CrossTenantAccessPolicyInboundTrust, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationDefault extends Entity, Partial<Parsable> {
    /** Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B collaboration. */
    b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration. */
    b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect. */
    b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting;
    /** Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect. */
    b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting;
    /** Determines the default configuration for trusting other Conditional Access claims from external Azure AD organizations. */
    inboundTrust?: CrossTenantAccessPolicyInboundTrust;
    /** If true, the default configuration is set to the system default configuration. If false, the default settings have been customized. */
    isServiceDefault?: boolean;
}
