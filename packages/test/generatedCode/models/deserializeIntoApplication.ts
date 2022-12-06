import {deserializeIntoAddIn} from './deserializeIntoAddIn';
import {deserializeIntoApiApplication} from './deserializeIntoApiApplication';
import {deserializeIntoAppRole} from './deserializeIntoAppRole';
import {deserializeIntoCertification} from './deserializeIntoCertification';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoExtensionProperty} from './deserializeIntoExtensionProperty';
import {deserializeIntoFederatedIdentityCredential} from './deserializeIntoFederatedIdentityCredential';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoInformationalUrl} from './deserializeIntoInformationalUrl';
import {deserializeIntoKeyCredential} from './deserializeIntoKeyCredential';
import {deserializeIntoOptionalClaims} from './deserializeIntoOptionalClaims';
import {deserializeIntoParentalControlSettings} from './deserializeIntoParentalControlSettings';
import {deserializeIntoPasswordCredential} from './deserializeIntoPasswordCredential';
import {deserializeIntoPublicClientApplication} from './deserializeIntoPublicClientApplication';
import {deserializeIntoRequiredResourceAccess} from './deserializeIntoRequiredResourceAccess';
import {deserializeIntoSpaApplication} from './deserializeIntoSpaApplication';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {deserializeIntoVerifiedPublisher} from './deserializeIntoVerifiedPublisher';
import {deserializeIntoWebApplication} from './deserializeIntoWebApplication';
import {Application} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplication(application: Application | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(application),
        "addIns": n => { application.addIns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAddIn) as any ; },
        "api": n => { application.api = n.getObject(deserializeIntoApiApplication) as any ; },
        "appId": n => { application.appId = n.getStringValue() as any ; },
        "applicationTemplateId": n => { application.applicationTemplateId = n.getStringValue() as any ; },
        "appRoles": n => { application.appRoles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRole) as any ; },
        "certification": n => { application.certification = n.getObject(deserializeIntoCertification) as any ; },
        "createdDateTime": n => { application.createdDateTime = n.getDateValue() as any ; },
        "createdOnBehalfOf": n => { application.createdOnBehalfOf = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "defaultRedirectUri": n => { application.defaultRedirectUri = n.getStringValue() as any ; },
        "description": n => { application.description = n.getStringValue() as any ; },
        "disabledByMicrosoftStatus": n => { application.disabledByMicrosoftStatus = n.getStringValue() as any ; },
        "displayName": n => { application.displayName = n.getStringValue() as any ; },
        "extensionProperties": n => { application.extensionProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtensionProperty) as any ; },
        "federatedIdentityCredentials": n => { application.federatedIdentityCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFederatedIdentityCredential) as any ; },
        "groupMembershipClaims": n => { application.groupMembershipClaims = n.getStringValue() as any ; },
        "homeRealmDiscoveryPolicies": n => { application.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHomeRealmDiscoveryPolicy) as any ; },
        "identifierUris": n => { application.identifierUris = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "info": n => { application.info = n.getObject(deserializeIntoInformationalUrl) as any ; },
        "isDeviceOnlyAuthSupported": n => { application.isDeviceOnlyAuthSupported = n.getBooleanValue() as any ; },
        "isFallbackPublicClient": n => { application.isFallbackPublicClient = n.getBooleanValue() as any ; },
        "keyCredentials": n => { application.keyCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyCredential) as any ; },
        "logo": n => { application.logo = n.getStringValue() as any ; },
        "notes": n => { application.notes = n.getStringValue() as any ; },
        "oauth2RequirePostResponse": n => { application.oauth2RequirePostResponse = n.getBooleanValue() as any ; },
        "optionalClaims": n => { application.optionalClaims = n.getObject(deserializeIntoOptionalClaims) as any ; },
        "owners": n => { application.owners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "parentalControlSettings": n => { application.parentalControlSettings = n.getObject(deserializeIntoParentalControlSettings) as any ; },
        "passwordCredentials": n => { application.passwordCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordCredential) as any ; },
        "publicClient": n => { application.publicClient = n.getObject(deserializeIntoPublicClientApplication) as any ; },
        "publisherDomain": n => { application.publisherDomain = n.getStringValue() as any ; },
        "requiredResourceAccess": n => { application.requiredResourceAccess = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRequiredResourceAccess) as any ; },
        "samlMetadataUrl": n => { application.samlMetadataUrl = n.getStringValue() as any ; },
        "serviceManagementReference": n => { application.serviceManagementReference = n.getStringValue() as any ; },
        "signInAudience": n => { application.signInAudience = n.getStringValue() as any ; },
        "spa": n => { application.spa = n.getObject(deserializeIntoSpaApplication) as any ; },
        "tags": n => { application.tags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tokenEncryptionKeyId": n => { application.tokenEncryptionKeyId = n.getStringValue() as any ; },
        "tokenIssuancePolicies": n => { application.tokenIssuancePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenIssuancePolicy) as any ; },
        "tokenLifetimePolicies": n => { application.tokenLifetimePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenLifetimePolicy) as any ; },
        "verifiedPublisher": n => { application.verifiedPublisher = n.getObject(deserializeIntoVerifiedPublisher) as any ; },
        "web": n => { application.web = n.getObject(deserializeIntoWebApplication) as any ; },
    }
}
