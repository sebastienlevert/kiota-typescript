import {PolicyRoot} from './index';
import {serializeActivityBasedTimeoutPolicy} from './serializeActivityBasedTimeoutPolicy';
import {serializeAdminConsentRequestPolicy} from './serializeAdminConsentRequestPolicy';
import {serializeAuthenticationFlowsPolicy} from './serializeAuthenticationFlowsPolicy';
import {serializeAuthenticationMethodsPolicy} from './serializeAuthenticationMethodsPolicy';
import {serializeAuthorizationPolicy} from './serializeAuthorizationPolicy';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {serializeCrossTenantAccessPolicy} from './serializeCrossTenantAccessPolicy';
import {serializeEntity} from './serializeEntity';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {serializeIdentitySecurityDefaultsEnforcementPolicy} from './serializeIdentitySecurityDefaultsEnforcementPolicy';
import {serializePermissionGrantPolicy} from './serializePermissionGrantPolicy';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {serializeUnifiedRoleManagementPolicyAssignment} from './serializeUnifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePolicyRoot(writer: SerializationWriter, policyRoot: PolicyRoot | undefined = {}) : void {
        serializeEntity(writer, policyRoot)
            writer.writeCollectionOfObjectValuesFromMethod("activityBasedTimeoutPolicies", policyRoot.activityBasedTimeoutPolicies as any, serializeActivityBasedTimeoutPolicy);
            writer.writeObjectValueFromMethod("adminConsentRequestPolicy", policyRoot.adminConsentRequestPolicy as any, serializeAdminConsentRequestPolicy);
            writer.writeObjectValueFromMethod("authenticationFlowsPolicy", policyRoot.authenticationFlowsPolicy as any, serializeAuthenticationFlowsPolicy);
            writer.writeObjectValueFromMethod("authenticationMethodsPolicy", policyRoot.authenticationMethodsPolicy as any, serializeAuthenticationMethodsPolicy);
            writer.writeObjectValueFromMethod("authorizationPolicy", policyRoot.authorizationPolicy as any, serializeAuthorizationPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("claimsMappingPolicies", policyRoot.claimsMappingPolicies as any, serializeClaimsMappingPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("conditionalAccessPolicies", policyRoot.conditionalAccessPolicies as any, serializeConditionalAccessPolicy);
            writer.writeObjectValueFromMethod("crossTenantAccessPolicy", policyRoot.crossTenantAccessPolicy as any, serializeCrossTenantAccessPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("featureRolloutPolicies", policyRoot.featureRolloutPolicies as any, serializeFeatureRolloutPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("homeRealmDiscoveryPolicies", policyRoot.homeRealmDiscoveryPolicies as any, serializeHomeRealmDiscoveryPolicy);
            writer.writeObjectValueFromMethod("identitySecurityDefaultsEnforcementPolicy", policyRoot.identitySecurityDefaultsEnforcementPolicy as any, serializeIdentitySecurityDefaultsEnforcementPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("permissionGrantPolicies", policyRoot.permissionGrantPolicies as any, serializePermissionGrantPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("roleManagementPolicies", policyRoot.roleManagementPolicies as any, serializeUnifiedRoleManagementPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("roleManagementPolicyAssignments", policyRoot.roleManagementPolicyAssignments as any, serializeUnifiedRoleManagementPolicyAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("tokenIssuancePolicies", policyRoot.tokenIssuancePolicies as any, serializeTokenIssuancePolicy);
            writer.writeCollectionOfObjectValuesFromMethod("tokenLifetimePolicies", policyRoot.tokenLifetimePolicies as any, serializeTokenLifetimePolicy);
}
