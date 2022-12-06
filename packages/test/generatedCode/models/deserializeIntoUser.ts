import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoAssignedLicense} from './deserializeIntoAssignedLicense';
import {deserializeIntoAssignedPlan} from './deserializeIntoAssignedPlan';
import {deserializeIntoAuthentication} from './deserializeIntoAuthentication';
import {deserializeIntoAuthorizationInfo} from './deserializeIntoAuthorizationInfo';
import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {deserializeIntoCalendarGroup} from './deserializeIntoCalendarGroup';
import {deserializeIntoChat} from './deserializeIntoChat';
import {deserializeIntoContact} from './deserializeIntoContact';
import {deserializeIntoContactFolder} from './deserializeIntoContactFolder';
import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {deserializeIntoEmployeeOrgData} from './deserializeIntoEmployeeOrgData';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoInferenceClassification} from './deserializeIntoInferenceClassification';
import {deserializeIntoLicenseAssignmentState} from './deserializeIntoLicenseAssignmentState';
import {deserializeIntoLicenseDetails} from './deserializeIntoLicenseDetails';
import {deserializeIntoMailboxSettings} from './deserializeIntoMailboxSettings';
import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {deserializeIntoOAuth2PermissionGrant} from './deserializeIntoOAuth2PermissionGrant';
import {deserializeIntoObjectIdentity} from './deserializeIntoObjectIdentity';
import {deserializeIntoOfficeGraphInsights} from './deserializeIntoOfficeGraphInsights';
import {deserializeIntoOnenote} from './deserializeIntoOnenote';
import {deserializeIntoOnlineMeeting} from './deserializeIntoOnlineMeeting';
import {deserializeIntoOnPremisesExtensionAttributes} from './deserializeIntoOnPremisesExtensionAttributes';
import {deserializeIntoOnPremisesProvisioningError} from './deserializeIntoOnPremisesProvisioningError';
import {deserializeIntoOutlookUser} from './deserializeIntoOutlookUser';
import {deserializeIntoPasswordProfile} from './deserializeIntoPasswordProfile';
import {deserializeIntoPerson} from './deserializeIntoPerson';
import {deserializeIntoPlannerUser} from './deserializeIntoPlannerUser';
import {deserializeIntoPresence} from './deserializeIntoPresence';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoProvisionedPlan} from './deserializeIntoProvisionedPlan';
import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {deserializeIntoSite} from './deserializeIntoSite';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {deserializeIntoTodo} from './deserializeIntoTodo';
import {deserializeIntoUserActivity} from './deserializeIntoUserActivity';
import {deserializeIntoUserSettings} from './deserializeIntoUserSettings';
import {deserializeIntoUserTeamwork} from './deserializeIntoUserTeamwork';
import {User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUser(user: User | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(user),
        "aboutMe": n => { user.aboutMe = n.getStringValue() as any ; },
        "accountEnabled": n => { user.accountEnabled = n.getBooleanValue() as any ; },
        "activities": n => { user.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserActivity) as any ; },
        "ageGroup": n => { user.ageGroup = n.getStringValue() as any ; },
        "agreementAcceptances": n => { user.agreementAcceptances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementAcceptance) as any ; },
        "appRoleAssignments": n => { user.appRoleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRoleAssignment) as any ; },
        "assignedLicenses": n => { user.assignedLicenses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLicense) as any ; },
        "assignedPlans": n => { user.assignedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedPlan) as any ; },
        "authentication": n => { user.authentication = n.getObject(deserializeIntoAuthentication) as any ; },
        "authorizationInfo": n => { user.authorizationInfo = n.getObject(deserializeIntoAuthorizationInfo) as any ; },
        "birthday": n => { user.birthday = n.getDateValue() as any ; },
        "businessPhones": n => { user.businessPhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "calendar": n => { user.calendar = n.getObject(deserializeIntoCalendar) as any ; },
        "calendarGroups": n => { user.calendarGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarGroup) as any ; },
        "calendars": n => { user.calendars = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendar) as any ; },
        "calendarView": n => { user.calendarView = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "chats": n => { user.chats = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChat) as any ; },
        "city": n => { user.city = n.getStringValue() as any ; },
        "companyName": n => { user.companyName = n.getStringValue() as any ; },
        "consentProvidedForMinor": n => { user.consentProvidedForMinor = n.getStringValue() as any ; },
        "contactFolders": n => { user.contactFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContactFolder) as any ; },
        "contacts": n => { user.contacts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContact) as any ; },
        "country": n => { user.country = n.getStringValue() as any ; },
        "createdDateTime": n => { user.createdDateTime = n.getDateValue() as any ; },
        "createdObjects": n => { user.createdObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "creationType": n => { user.creationType = n.getStringValue() as any ; },
        "department": n => { user.department = n.getStringValue() as any ; },
        "deviceEnrollmentLimit": n => { user.deviceEnrollmentLimit = n.getNumberValue() as any ; },
        "deviceManagementTroubleshootingEvents": n => { user.deviceManagementTroubleshootingEvents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementTroubleshootingEvent) as any ; },
        "directReports": n => { user.directReports = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "displayName": n => { user.displayName = n.getStringValue() as any ; },
        "drive": n => { user.drive = n.getObject(deserializeIntoDrive) as any ; },
        "drives": n => { user.drives = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDrive) as any ; },
        "employeeHireDate": n => { user.employeeHireDate = n.getDateValue() as any ; },
        "employeeId": n => { user.employeeId = n.getStringValue() as any ; },
        "employeeOrgData": n => { user.employeeOrgData = n.getObject(deserializeIntoEmployeeOrgData) as any ; },
        "employeeType": n => { user.employeeType = n.getStringValue() as any ; },
        "events": n => { user.events = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "extensions": n => { user.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "externalUserState": n => { user.externalUserState = n.getStringValue() as any ; },
        "externalUserStateChangeDateTime": n => { user.externalUserStateChangeDateTime = n.getDateValue() as any ; },
        "faxNumber": n => { user.faxNumber = n.getStringValue() as any ; },
        "followedSites": n => { user.followedSites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
        "givenName": n => { user.givenName = n.getStringValue() as any ; },
        "hireDate": n => { user.hireDate = n.getDateValue() as any ; },
        "identities": n => { user.identities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoObjectIdentity) as any ; },
        "imAddresses": n => { user.imAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "inferenceClassification": n => { user.inferenceClassification = n.getObject(deserializeIntoInferenceClassification) as any ; },
        "insights": n => { user.insights = n.getObject(deserializeIntoOfficeGraphInsights) as any ; },
        "interests": n => { user.interests = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isResourceAccount": n => { user.isResourceAccount = n.getBooleanValue() as any ; },
        "jobTitle": n => { user.jobTitle = n.getStringValue() as any ; },
        "joinedTeams": n => { user.joinedTeams = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeam) as any ; },
        "lastPasswordChangeDateTime": n => { user.lastPasswordChangeDateTime = n.getDateValue() as any ; },
        "legalAgeGroupClassification": n => { user.legalAgeGroupClassification = n.getStringValue() as any ; },
        "licenseAssignmentStates": n => { user.licenseAssignmentStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseAssignmentState) as any ; },
        "licenseDetails": n => { user.licenseDetails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseDetails) as any ; },
        "mail": n => { user.mail = n.getStringValue() as any ; },
        "mailboxSettings": n => { user.mailboxSettings = n.getObject(deserializeIntoMailboxSettings) as any ; },
        "mailFolders": n => { user.mailFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailFolder) as any ; },
        "mailNickname": n => { user.mailNickname = n.getStringValue() as any ; },
        "managedAppRegistrations": n => { user.managedAppRegistrations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppRegistration) as any ; },
        "managedDevices": n => { user.managedDevices = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDevice) as any ; },
        "manager": n => { user.manager = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "memberOf": n => { user.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "messages": n => { user.messages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessage) as any ; },
        "mobilePhone": n => { user.mobilePhone = n.getStringValue() as any ; },
        "mySite": n => { user.mySite = n.getStringValue() as any ; },
        "oauth2PermissionGrants": n => { user.oauth2PermissionGrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOAuth2PermissionGrant) as any ; },
        "officeLocation": n => { user.officeLocation = n.getStringValue() as any ; },
        "onenote": n => { user.onenote = n.getObject(deserializeIntoOnenote) as any ; },
        "onlineMeetings": n => { user.onlineMeetings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnlineMeeting) as any ; },
        "onPremisesDistinguishedName": n => { user.onPremisesDistinguishedName = n.getStringValue() as any ; },
        "onPremisesDomainName": n => { user.onPremisesDomainName = n.getStringValue() as any ; },
        "onPremisesExtensionAttributes": n => { user.onPremisesExtensionAttributes = n.getObject(deserializeIntoOnPremisesExtensionAttributes) as any ; },
        "onPremisesImmutableId": n => { user.onPremisesImmutableId = n.getStringValue() as any ; },
        "onPremisesLastSyncDateTime": n => { user.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesProvisioningErrors": n => { user.onPremisesProvisioningErrors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnPremisesProvisioningError) as any ; },
        "onPremisesSamAccountName": n => { user.onPremisesSamAccountName = n.getStringValue() as any ; },
        "onPremisesSecurityIdentifier": n => { user.onPremisesSecurityIdentifier = n.getStringValue() as any ; },
        "onPremisesSyncEnabled": n => { user.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "onPremisesUserPrincipalName": n => { user.onPremisesUserPrincipalName = n.getStringValue() as any ; },
        "otherMails": n => { user.otherMails = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "outlook": n => { user.outlook = n.getObject(deserializeIntoOutlookUser) as any ; },
        "ownedDevices": n => { user.ownedDevices = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "ownedObjects": n => { user.ownedObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "passwordPolicies": n => { user.passwordPolicies = n.getStringValue() as any ; },
        "passwordProfile": n => { user.passwordProfile = n.getObject(deserializeIntoPasswordProfile) as any ; },
        "pastProjects": n => { user.pastProjects = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "people": n => { user.people = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPerson) as any ; },
        "photo": n => { user.photo = n.getObject(deserializeIntoProfilePhoto) as any ; },
        "photos": n => { user.photos = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProfilePhoto) as any ; },
        "planner": n => { user.planner = n.getObject(deserializeIntoPlannerUser) as any ; },
        "postalCode": n => { user.postalCode = n.getStringValue() as any ; },
        "preferredDataLocation": n => { user.preferredDataLocation = n.getStringValue() as any ; },
        "preferredLanguage": n => { user.preferredLanguage = n.getStringValue() as any ; },
        "preferredName": n => { user.preferredName = n.getStringValue() as any ; },
        "presence": n => { user.presence = n.getObject(deserializeIntoPresence) as any ; },
        "provisionedPlans": n => { user.provisionedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisionedPlan) as any ; },
        "proxyAddresses": n => { user.proxyAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "registeredDevices": n => { user.registeredDevices = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "responsibilities": n => { user.responsibilities = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "schools": n => { user.schools = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "scopedRoleMemberOf": n => { user.scopedRoleMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScopedRoleMembership) as any ; },
        "securityIdentifier": n => { user.securityIdentifier = n.getStringValue() as any ; },
        "settings": n => { user.settings = n.getObject(deserializeIntoUserSettings) as any ; },
        "showInAddressList": n => { user.showInAddressList = n.getBooleanValue() as any ; },
        "signInSessionsValidFromDateTime": n => { user.signInSessionsValidFromDateTime = n.getDateValue() as any ; },
        "skills": n => { user.skills = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "state": n => { user.state = n.getStringValue() as any ; },
        "streetAddress": n => { user.streetAddress = n.getStringValue() as any ; },
        "surname": n => { user.surname = n.getStringValue() as any ; },
        "teamwork": n => { user.teamwork = n.getObject(deserializeIntoUserTeamwork) as any ; },
        "todo": n => { user.todo = n.getObject(deserializeIntoTodo) as any ; },
        "transitiveMemberOf": n => { user.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "usageLocation": n => { user.usageLocation = n.getStringValue() as any ; },
        "userPrincipalName": n => { user.userPrincipalName = n.getStringValue() as any ; },
        "userType": n => { user.userType = n.getStringValue() as any ; },
    }
}
