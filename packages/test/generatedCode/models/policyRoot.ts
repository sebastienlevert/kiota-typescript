import {ActivityBasedTimeoutPolicy, AdminConsentRequestPolicy, AuthenticationFlowsPolicy, AuthenticationMethodsPolicy, AuthorizationPolicy, ClaimsMappingPolicy, ConditionalAccessPolicy, CrossTenantAccessPolicy, Entity, FeatureRolloutPolicy, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, PermissionGrantPolicy, TokenIssuancePolicy, TokenLifetimePolicy, UnifiedRoleManagementPolicy, UnifiedRoleManagementPolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyRoot extends Entity, Partial<Parsable> {
    /** The policy that controls the idle time out for web sessions for applications. */
    activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[];
    /** The policy by which consent requests are created and managed for the entire tenant. */
    adminConsentRequestPolicy?: AdminConsentRequestPolicy;
    /** The policy configuration of the self-service sign-up experience of external users. */
    authenticationFlowsPolicy?: AuthenticationFlowsPolicy;
    /** The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD). */
    authenticationMethodsPolicy?: AuthenticationMethodsPolicy;
    /** The policy that controls Azure AD authorization settings. */
    authorizationPolicy?: AuthorizationPolicy;
    /** The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application. */
    claimsMappingPolicies?: ClaimsMappingPolicy[];
    /** The custom rules that define an access scenario. */
    conditionalAccessPolicies?: ConditionalAccessPolicy[];
    /** The custom rules that define an access scenario when interacting with external Azure AD tenants. */
    crossTenantAccessPolicy?: CrossTenantAccessPolicy;
    /** The feature rollout policy associated with a directory object. */
    featureRolloutPolicies?: FeatureRolloutPolicy[];
    /** The policy to control Azure AD authentication behavior for federated users. */
    homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
    /** The policy that represents the security defaults that protect against common attacks. */
    identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy;
    /** The policy that specifies the conditions under which consent can be granted. */
    permissionGrantPolicies?: PermissionGrantPolicy[];
    /** Specifies the various policies associated with scopes and roles. */
    roleManagementPolicies?: UnifiedRoleManagementPolicy[];
    /** The assignment of a role management policy to a role definition object. */
    roleManagementPolicyAssignments?: UnifiedRoleManagementPolicyAssignment[];
    /** The policy that specifies the characteristics of SAML tokens issued by Azure AD. */
    tokenIssuancePolicies?: TokenIssuancePolicy[];
    /** The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD. */
    tokenLifetimePolicies?: TokenLifetimePolicy[];
}
