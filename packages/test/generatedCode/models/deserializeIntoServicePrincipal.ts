import {deserializeIntoAddIn} from './deserializeIntoAddIn';
import {deserializeIntoAppManagementPolicy} from './deserializeIntoAppManagementPolicy';
import {deserializeIntoAppRole} from './deserializeIntoAppRole';
import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoCustomSecurityAttributeValue} from './deserializeIntoCustomSecurityAttributeValue';
import {deserializeIntoDelegatedPermissionClassification} from './deserializeIntoDelegatedPermissionClassification';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoFederatedIdentityCredential} from './deserializeIntoFederatedIdentityCredential';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoInformationalUrl} from './deserializeIntoInformationalUrl';
import {deserializeIntoKeyCredential} from './deserializeIntoKeyCredential';
import {deserializeIntoLicenseDetails} from './deserializeIntoLicenseDetails';
import {deserializeIntoOAuth2PermissionGrant} from './deserializeIntoOAuth2PermissionGrant';
import {deserializeIntoPasswordCredential} from './deserializeIntoPasswordCredential';
import {deserializeIntoPasswordSingleSignOnSettings} from './deserializeIntoPasswordSingleSignOnSettings';
import {deserializeIntoPermissionScope} from './deserializeIntoPermissionScope';
import {deserializeIntoSamlSingleSignOnSettings} from './deserializeIntoSamlSingleSignOnSettings';
import {deserializeIntoSynchronization} from './deserializeIntoSynchronization';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {deserializeIntoVerifiedPublisher} from './deserializeIntoVerifiedPublisher';
import {ServicePrincipal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipal(servicePrincipal: ServicePrincipal | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(servicePrincipal),
        "accountEnabled": n => { servicePrincipal.accountEnabled = n.getBooleanValue() as any ; },
        "addIns": n => { servicePrincipal.addIns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAddIn) as any ; },
        "alternativeNames": n => { servicePrincipal.alternativeNames = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "appDescription": n => { servicePrincipal.appDescription = n.getStringValue() as any ; },
        "appDisplayName": n => { servicePrincipal.appDisplayName = n.getStringValue() as any ; },
        "appId": n => { servicePrincipal.appId = n.getStringValue() as any ; },
        "applicationTemplateId": n => { servicePrincipal.applicationTemplateId = n.getStringValue() as any ; },
        "appManagementPolicies": n => { servicePrincipal.appManagementPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppManagementPolicy) as any ; },
        "appOwnerOrganizationId": n => { servicePrincipal.appOwnerOrganizationId = n.getStringValue() as any ; },
        "appRoleAssignedTo": n => { servicePrincipal.appRoleAssignedTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRoleAssignment) as any ; },
        "appRoleAssignmentRequired": n => { servicePrincipal.appRoleAssignmentRequired = n.getBooleanValue() as any ; },
        "appRoleAssignments": n => { servicePrincipal.appRoleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRoleAssignment) as any ; },
        "appRoles": n => { servicePrincipal.appRoles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRole) as any ; },
        "claimsMappingPolicies": n => { servicePrincipal.claimsMappingPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoClaimsMappingPolicy) as any ; },
        "createdObjects": n => { servicePrincipal.createdObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "customSecurityAttributes": n => { servicePrincipal.customSecurityAttributes = n.getObject(deserializeIntoCustomSecurityAttributeValue) as any ; },
        "delegatedPermissionClassifications": n => { servicePrincipal.delegatedPermissionClassifications = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDelegatedPermissionClassification) as any ; },
        "description": n => { servicePrincipal.description = n.getStringValue() as any ; },
        "disabledByMicrosoftStatus": n => { servicePrincipal.disabledByMicrosoftStatus = n.getStringValue() as any ; },
        "displayName": n => { servicePrincipal.displayName = n.getStringValue() as any ; },
        "endpoints": n => { servicePrincipal.endpoints = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEndpoint) as any ; },
        "errorUrl": n => { servicePrincipal.errorUrl = n.getStringValue() as any ; },
        "federatedIdentityCredentials": n => { servicePrincipal.federatedIdentityCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFederatedIdentityCredential) as any ; },
        "homepage": n => { servicePrincipal.homepage = n.getStringValue() as any ; },
        "homeRealmDiscoveryPolicies": n => { servicePrincipal.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHomeRealmDiscoveryPolicy) as any ; },
        "info": n => { servicePrincipal.info = n.getObject(deserializeIntoInformationalUrl) as any ; },
        "keyCredentials": n => { servicePrincipal.keyCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyCredential) as any ; },
        "licenseDetails": n => { servicePrincipal.licenseDetails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseDetails) as any ; },
        "loginUrl": n => { servicePrincipal.loginUrl = n.getStringValue() as any ; },
        "logoutUrl": n => { servicePrincipal.logoutUrl = n.getStringValue() as any ; },
        "memberOf": n => { servicePrincipal.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "notes": n => { servicePrincipal.notes = n.getStringValue() as any ; },
        "notificationEmailAddresses": n => { servicePrincipal.notificationEmailAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "oauth2PermissionGrants": n => { servicePrincipal.oauth2PermissionGrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOAuth2PermissionGrant) as any ; },
        "ownedObjects": n => { servicePrincipal.ownedObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "owners": n => { servicePrincipal.owners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "passwordCredentials": n => { servicePrincipal.passwordCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordCredential) as any ; },
        "passwordSingleSignOnSettings": n => { servicePrincipal.passwordSingleSignOnSettings = n.getObject(deserializeIntoPasswordSingleSignOnSettings) as any ; },
        "preferredSingleSignOnMode": n => { servicePrincipal.preferredSingleSignOnMode = n.getStringValue() as any ; },
        "preferredTokenSigningKeyEndDateTime": n => { servicePrincipal.preferredTokenSigningKeyEndDateTime = n.getDateValue() as any ; },
        "preferredTokenSigningKeyThumbprint": n => { servicePrincipal.preferredTokenSigningKeyThumbprint = n.getStringValue() as any ; },
        "publishedPermissionScopes": n => { servicePrincipal.publishedPermissionScopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionScope) as any ; },
        "publisherName": n => { servicePrincipal.publisherName = n.getStringValue() as any ; },
        "replyUrls": n => { servicePrincipal.replyUrls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "samlMetadataUrl": n => { servicePrincipal.samlMetadataUrl = n.getStringValue() as any ; },
        "samlSingleSignOnSettings": n => { servicePrincipal.samlSingleSignOnSettings = n.getObject(deserializeIntoSamlSingleSignOnSettings) as any ; },
        "servicePrincipalNames": n => { servicePrincipal.servicePrincipalNames = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "servicePrincipalType": n => { servicePrincipal.servicePrincipalType = n.getStringValue() as any ; },
        "signInAudience": n => { servicePrincipal.signInAudience = n.getStringValue() as any ; },
        "synchronization": n => { servicePrincipal.synchronization = n.getObject(deserializeIntoSynchronization) as any ; },
        "tags": n => { servicePrincipal.tags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tokenEncryptionKeyId": n => { servicePrincipal.tokenEncryptionKeyId = n.getStringValue() as any ; },
        "tokenIssuancePolicies": n => { servicePrincipal.tokenIssuancePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenIssuancePolicy) as any ; },
        "tokenLifetimePolicies": n => { servicePrincipal.tokenLifetimePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenLifetimePolicy) as any ; },
        "transitiveMemberOf": n => { servicePrincipal.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "verifiedPublisher": n => { servicePrincipal.verifiedPublisher = n.getObject(deserializeIntoVerifiedPublisher) as any ; },
    }
}
