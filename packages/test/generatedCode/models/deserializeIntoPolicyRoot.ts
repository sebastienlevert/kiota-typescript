import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoAdminConsentRequestPolicy} from './deserializeIntoAdminConsentRequestPolicy';
import {deserializeIntoAuthenticationFlowsPolicy} from './deserializeIntoAuthenticationFlowsPolicy';
import {deserializeIntoAuthenticationMethodsPolicy} from './deserializeIntoAuthenticationMethodsPolicy';
import {deserializeIntoAuthorizationPolicy} from './deserializeIntoAuthorizationPolicy';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoConditionalAccessPolicy} from './deserializeIntoConditionalAccessPolicy';
import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoFeatureRolloutPolicy} from './deserializeIntoFeatureRolloutPolicy';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {deserializeIntoUnifiedRoleManagementPolicy} from './deserializeIntoUnifiedRoleManagementPolicy';
import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from './deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {PolicyRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPolicyRoot(policyRoot: PolicyRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(policyRoot),
        "activityBasedTimeoutPolicies": n => { policyRoot.activityBasedTimeoutPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoActivityBasedTimeoutPolicy) as any ; },
        "adminConsentRequestPolicy": n => { policyRoot.adminConsentRequestPolicy = n.getObject(deserializeIntoAdminConsentRequestPolicy) as any ; },
        "authenticationFlowsPolicy": n => { policyRoot.authenticationFlowsPolicy = n.getObject(deserializeIntoAuthenticationFlowsPolicy) as any ; },
        "authenticationMethodsPolicy": n => { policyRoot.authenticationMethodsPolicy = n.getObject(deserializeIntoAuthenticationMethodsPolicy) as any ; },
        "authorizationPolicy": n => { policyRoot.authorizationPolicy = n.getObject(deserializeIntoAuthorizationPolicy) as any ; },
        "claimsMappingPolicies": n => { policyRoot.claimsMappingPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoClaimsMappingPolicy) as any ; },
        "conditionalAccessPolicies": n => { policyRoot.conditionalAccessPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConditionalAccessPolicy) as any ; },
        "crossTenantAccessPolicy": n => { policyRoot.crossTenantAccessPolicy = n.getObject(deserializeIntoCrossTenantAccessPolicy) as any ; },
        "featureRolloutPolicies": n => { policyRoot.featureRolloutPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFeatureRolloutPolicy) as any ; },
        "homeRealmDiscoveryPolicies": n => { policyRoot.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHomeRealmDiscoveryPolicy) as any ; },
        "identitySecurityDefaultsEnforcementPolicy": n => { policyRoot.identitySecurityDefaultsEnforcementPolicy = n.getObject(deserializeIntoIdentitySecurityDefaultsEnforcementPolicy) as any ; },
        "permissionGrantPolicies": n => { policyRoot.permissionGrantPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionGrantPolicy) as any ; },
        "roleManagementPolicies": n => { policyRoot.roleManagementPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicy) as any ; },
        "roleManagementPolicyAssignments": n => { policyRoot.roleManagementPolicyAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyAssignment) as any ; },
        "tokenIssuancePolicies": n => { policyRoot.tokenIssuancePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenIssuancePolicy) as any ; },
        "tokenLifetimePolicies": n => { policyRoot.tokenLifetimePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenLifetimePolicy) as any ; },
    }
}
