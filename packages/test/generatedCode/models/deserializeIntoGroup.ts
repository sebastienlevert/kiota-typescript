import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoAssignedLabel} from './deserializeIntoAssignedLabel';
import {deserializeIntoAssignedLicense} from './deserializeIntoAssignedLicense';
import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {deserializeIntoConversation} from './deserializeIntoConversation';
import {deserializeIntoConversationThread} from './deserializeIntoConversationThread';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoDirectorySetting} from './deserializeIntoDirectorySetting';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoGroupLifecyclePolicy} from './deserializeIntoGroupLifecyclePolicy';
import {deserializeIntoGroupWritebackConfiguration} from './deserializeIntoGroupWritebackConfiguration';
import {deserializeIntoLicenseProcessingState} from './deserializeIntoLicenseProcessingState';
import {deserializeIntoMembershipRuleProcessingStatus} from './deserializeIntoMembershipRuleProcessingStatus';
import {deserializeIntoOnenote} from './deserializeIntoOnenote';
import {deserializeIntoOnPremisesProvisioningError} from './deserializeIntoOnPremisesProvisioningError';
import {deserializeIntoPlannerGroup} from './deserializeIntoPlannerGroup';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {deserializeIntoSite} from './deserializeIntoSite';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {GroupAccessType} from './groupAccessType';
import {Group} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroup(group: Group | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(group),
        "acceptedSenders": n => { group.acceptedSenders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "accessType": n => { group.accessType = n.getEnumValue<GroupAccessType>(GroupAccessType) as any ; },
        "allowExternalSenders": n => { group.allowExternalSenders = n.getBooleanValue() as any ; },
        "appRoleAssignments": n => { group.appRoleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRoleAssignment) as any ; },
        "assignedLabels": n => { group.assignedLabels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLabel) as any ; },
        "assignedLicenses": n => { group.assignedLicenses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLicense) as any ; },
        "autoSubscribeNewMembers": n => { group.autoSubscribeNewMembers = n.getBooleanValue() as any ; },
        "calendar": n => { group.calendar = n.getObject(deserializeIntoCalendar) as any ; },
        "calendarView": n => { group.calendarView = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "classification": n => { group.classification = n.getStringValue() as any ; },
        "conversations": n => { group.conversations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversation) as any ; },
        "createdByAppId": n => { group.createdByAppId = n.getStringValue() as any ; },
        "createdDateTime": n => { group.createdDateTime = n.getDateValue() as any ; },
        "createdOnBehalfOf": n => { group.createdOnBehalfOf = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "description": n => { group.description = n.getStringValue() as any ; },
        "displayName": n => { group.displayName = n.getStringValue() as any ; },
        "drive": n => { group.drive = n.getObject(deserializeIntoDrive) as any ; },
        "drives": n => { group.drives = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDrive) as any ; },
        "endpoints": n => { group.endpoints = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEndpoint) as any ; },
        "events": n => { group.events = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "expirationDateTime": n => { group.expirationDateTime = n.getDateValue() as any ; },
        "extensions": n => { group.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "groupLifecyclePolicies": n => { group.groupLifecyclePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroupLifecyclePolicy) as any ; },
        "groupTypes": n => { group.groupTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "hasMembersWithLicenseErrors": n => { group.hasMembersWithLicenseErrors = n.getBooleanValue() as any ; },
        "hideFromAddressLists": n => { group.hideFromAddressLists = n.getBooleanValue() as any ; },
        "hideFromOutlookClients": n => { group.hideFromOutlookClients = n.getBooleanValue() as any ; },
        "infoCatalogs": n => { group.infoCatalogs = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isArchived": n => { group.isArchived = n.getBooleanValue() as any ; },
        "isAssignableToRole": n => { group.isAssignableToRole = n.getBooleanValue() as any ; },
        "isFavorite": n => { group.isFavorite = n.getBooleanValue() as any ; },
        "isManagementRestricted": n => { group.isManagementRestricted = n.getBooleanValue() as any ; },
        "isSubscribedByMail": n => { group.isSubscribedByMail = n.getBooleanValue() as any ; },
        "licenseProcessingState": n => { group.licenseProcessingState = n.getObject(deserializeIntoLicenseProcessingState) as any ; },
        "mail": n => { group.mail = n.getStringValue() as any ; },
        "mailEnabled": n => { group.mailEnabled = n.getBooleanValue() as any ; },
        "mailNickname": n => { group.mailNickname = n.getStringValue() as any ; },
        "memberOf": n => { group.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "members": n => { group.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "membershipRule": n => { group.membershipRule = n.getStringValue() as any ; },
        "membershipRuleProcessingState": n => { group.membershipRuleProcessingState = n.getStringValue() as any ; },
        "membershipRuleProcessingStatus": n => { group.membershipRuleProcessingStatus = n.getObject(deserializeIntoMembershipRuleProcessingStatus) as any ; },
        "membersWithLicenseErrors": n => { group.membersWithLicenseErrors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "onenote": n => { group.onenote = n.getObject(deserializeIntoOnenote) as any ; },
        "onPremisesDomainName": n => { group.onPremisesDomainName = n.getStringValue() as any ; },
        "onPremisesLastSyncDateTime": n => { group.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesNetBiosName": n => { group.onPremisesNetBiosName = n.getStringValue() as any ; },
        "onPremisesProvisioningErrors": n => { group.onPremisesProvisioningErrors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnPremisesProvisioningError) as any ; },
        "onPremisesSamAccountName": n => { group.onPremisesSamAccountName = n.getStringValue() as any ; },
        "onPremisesSecurityIdentifier": n => { group.onPremisesSecurityIdentifier = n.getStringValue() as any ; },
        "onPremisesSyncEnabled": n => { group.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "organizationId": n => { group.organizationId = n.getStringValue() as any ; },
        "owners": n => { group.owners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "permissionGrants": n => { group.permissionGrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermissionGrant) as any ; },
        "photo": n => { group.photo = n.getObject(deserializeIntoProfilePhoto) as any ; },
        "photos": n => { group.photos = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProfilePhoto) as any ; },
        "planner": n => { group.planner = n.getObject(deserializeIntoPlannerGroup) as any ; },
        "preferredDataLocation": n => { group.preferredDataLocation = n.getStringValue() as any ; },
        "preferredLanguage": n => { group.preferredLanguage = n.getStringValue() as any ; },
        "proxyAddresses": n => { group.proxyAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "rejectedSenders": n => { group.rejectedSenders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "renewedDateTime": n => { group.renewedDateTime = n.getDateValue() as any ; },
        "resourceBehaviorOptions": n => { group.resourceBehaviorOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "resourceProvisioningOptions": n => { group.resourceProvisioningOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "securityEnabled": n => { group.securityEnabled = n.getBooleanValue() as any ; },
        "securityIdentifier": n => { group.securityIdentifier = n.getStringValue() as any ; },
        "settings": n => { group.settings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectorySetting) as any ; },
        "sites": n => { group.sites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
        "team": n => { group.team = n.getObject(deserializeIntoTeam) as any ; },
        "theme": n => { group.theme = n.getStringValue() as any ; },
        "threads": n => { group.threads = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationThread) as any ; },
        "transitiveMemberOf": n => { group.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "transitiveMembers": n => { group.transitiveMembers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "unseenConversationsCount": n => { group.unseenConversationsCount = n.getNumberValue() as any ; },
        "unseenCount": n => { group.unseenCount = n.getNumberValue() as any ; },
        "unseenMessagesCount": n => { group.unseenMessagesCount = n.getNumberValue() as any ; },
        "visibility": n => { group.visibility = n.getStringValue() as any ; },
        "writebackConfiguration": n => { group.writebackConfiguration = n.getObject(deserializeIntoGroupWritebackConfiguration) as any ; },
    }
}
