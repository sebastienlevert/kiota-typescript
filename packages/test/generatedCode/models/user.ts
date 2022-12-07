import {AccessReviewInstance, AgreementAcceptance, AppConsentRequest, AppRoleAssignment, Approval, AssignedLicense, AssignedPlan, Authentication, AuthorizationInfo, Calendar, CalendarGroup, Chat, CloudPC, Contact, ContactFolder, CustomSecurityAttributeValue, Device, DeviceEnrollmentConfiguration, DeviceKey, DeviceManagementTroubleshootingEvent, DirectoryObject, Drive, EmployeeOrgData, Event, Extension, Group, InferenceClassification, InformationProtection, ItemInsights, LicenseAssignmentState, LicenseDetails, MailboxSettings, MailFolder, ManagedAppRegistration, ManagedDevice, Message, MobileAppIntentAndState, MobileAppTroubleshootingEvent, Notification, OAuth2PermissionGrant, ObjectIdentity, Onenote, OnlineMeeting, OnPremisesExtensionAttributes, OnPremisesProvisioningError, OutlookUser, PasswordProfile, Person, PlannerUser, Presence, Profile, ProfilePhoto, ProvisionedPlan, ScopedRoleMembership, ServicePrincipal, SignInActivity, Site, Team, Todo, UsageRight, UserActivity, UserAnalytics, UserPrint, UserSettings, UserTeamwork, WindowsInformationProtectionDeviceRegistration} from './index';
import {Security} from './security/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface User extends DirectoryObject, Partial<Parsable> {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    aboutMe?: string;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in). */
    accountEnabled?: boolean;
    /** The activities property */
    activities?: UserActivity[];
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    ageGroup?: string;
    /** The user's terms of use acceptance statuses. Read-only. Nullable. */
    agreementAcceptances?: AgreementAcceptance[];
    /** The analytics property */
    analytics?: UserAnalytics;
    /** The appConsentRequestsForApproval property */
    appConsentRequestsForApproval?: AppConsentRequest[];
    /** The appRoleAssignedResources property */
    appRoleAssignedResources?: ServicePrincipal[];
    /** Represents the app roles a user has been granted for an application. Supports $expand. */
    appRoleAssignments?: AppRoleAssignment[];
    /** The approvals property */
    approvals?: Approval[];
    /** The licenses that are assigned to the user, including inherited (group-based) licenses. This property doesn't differentiate directly-assigned and inherited licenses. Use the licenseAssignmentStates property to identify the directly-assigned and inherited licenses. Not nullable. Supports $filter (eq, not, /$count eq 0, /$count ne 0). */
    assignedLicenses?: AssignedLicense[];
    /** The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not). */
    assignedPlans?: AssignedPlan[];
    /** The authentication property */
    authentication?: Authentication;
    /** The authorizationInfo property */
    authorizationInfo?: AuthorizationInfo;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select. */
    birthday?: Date;
    /** The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith). */
    businessPhones?: string[];
    /** The calendar property */
    calendar?: Calendar;
    /** The user's calendar groups. Read-only. Nullable. */
    calendarGroups?: CalendarGroup[];
    /** The user's calendars. Read-only. Nullable. */
    calendars?: Calendar[];
    /** The calendar view for the calendar. Read-only. Nullable. */
    calendarView?: Event[];
    /** The chats property */
    chats?: Chat[];
    /** The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    city?: string;
    /** The cloudPCs property */
    cloudPCs?: CloudPC[];
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    companyName?: string;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    consentProvidedForMinor?: string;
    /** The user's contacts folders. Read-only. Nullable. */
    contactFolders?: ContactFolder[];
    /** The user's contacts. Read-only. Nullable. */
    contacts?: Contact[];
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    country?: string;
    /** The date and time the user was created, in ISO 8601 format and in UTC time. The value cannot be modified and is automatically populated when the entity is created. Nullable. For on-premises users, the value represents when they were first created in Azure AD. Property is null for some users created before June 2018 and on-premises users that were synced to Azure AD before June 2018. Read-only. Supports $filter (eq, ne, not , ge, le, in). */
    createdDateTime?: Date;
    /** Directory objects that were created by the user. Read-only. Nullable. */
    createdObjects?: DirectoryObject[];
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in). */
    creationType?: string;
    /** The customSecurityAttributes property */
    customSecurityAttributes?: CustomSecurityAttributeValue;
    /** The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    department?: string;
    /** Get enrollment configurations targeted to the user */
    deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[];
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    deviceEnrollmentLimit?: number;
    /** The deviceKeys property */
    deviceKeys?: DeviceKey[];
    /** The list of troubleshooting events for this user. */
    deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    /** The devices property */
    devices?: Device[];
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand. */
    directReports?: DirectoryObject[];
    /** The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search. */
    displayName?: string;
    /** The drive property */
    drive?: Drive;
    /** A collection of drives available for this user. Read-only. */
    drives?: Drive[];
    /** The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in). */
    employeeHireDate?: Date;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    employeeId?: string;
    /** The date and time when the user left or will leave the organization. To read or write this property, the calling app must be assigned the User-LifeCycleInfo.Read.All or User-LifeCycleInfo.ReadWrite.All permissions respectively. To read this property in delegated scenarios, the admin needs one of the following Azure AD roles: Lifecycle Workflows Administrator, Global Reader, or Global Admin. To write this property in delegated scenarios, the admin needs the Global Administrator Azure AD role. Supports $filter (eq, ne, not , ge, le, in). For more information, see Configure the employeeLeaveDateTime property for a user. */
    employeeLeaveDateTime?: Date;
    /** The employeeOrgData property */
    employeeOrgData?: EmployeeOrgData;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    employeeType?: string;
    /** The user's events. Default is to show events under the Default Calendar. Read-only. Nullable. */
    events?: Event[];
    /** The collection of open extensions defined for the user. Supports $expand. Nullable. */
    extensions?: Extension[];
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in). */
    externalUserState?: string;
    /** Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in). */
    externalUserStateChangeDateTime?: string;
    /** The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    faxNumber?: string;
    /** The followedSites property */
    followedSites?: Site[];
    /** The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    givenName?: string;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs. */
    hireDate?: Date;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName. */
    identities?: ObjectIdentity[];
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith). */
    imAddresses?: string[];
    /** The inferenceClassification property */
    inferenceClassification?: InferenceClassification;
    /** Identifies the info segments assigned to the user.  Supports $filter (eq, not, ge, le, startsWith). */
    infoCatalogs?: string[];
    /** The informationProtection property */
    informationProtection?: InformationProtection;
    /** The insights property */
    insights?: ItemInsights;
    /** A list for the user to describe their interests. Returned only on $select. */
    interests?: string[];
    /** The isManagementRestricted property */
    isManagementRestricted?: boolean;
    /** Do not use – reserved for future use. */
    isResourceAccount?: boolean;
    /** The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    jobTitle?: string;
    /** The joinedGroups property */
    joinedGroups?: Group[];
    /** The Microsoft Teams teams that the user is a member of. Read-only. Nullable. */
    joinedTeams?: Team[];
    /** The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. */
    lastPasswordChangeDateTime?: Date;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. */
    legalAgeGroupClassification?: string;
    /** State of license assignments for this user. Also indicates licenses that are directly-assigned and those that the user has inherited through group memberships. Read-only. Returned only on $select. */
    licenseAssignmentStates?: LicenseAssignmentState[];
    /** The licenseDetails property */
    licenseDetails?: LicenseDetails[];
    /** The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. This property cannot contain accent characters.  NOTE: We do not recommend updating this property for Azure AD B2C user profiles. Use the otherMails property instead.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values). */
    mail?: string;
    /** The mailboxSettings property */
    mailboxSettings?: MailboxSettings;
    /** The user's mail folders. Read-only. Nullable. */
    mailFolders?: MailFolder[];
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mailNickname?: string;
    /** Zero or more managed app registrations that belong to the user. */
    managedAppRegistrations?: ManagedAppRegistration[];
    /** The managed devices associated with the user. */
    managedDevices?: ManagedDevice[];
    /** The manager property */
    manager?: DirectoryObject;
    /** The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand. */
    memberOf?: DirectoryObject[];
    /** The messages in a mailbox or folder. Read-only. Nullable. */
    messages?: Message[];
    /** The list of troubleshooting events for this user. */
    mobileAppIntentAndStates?: MobileAppIntentAndState[];
    /** The list of mobile app troubleshooting events for this user. */
    mobileAppTroubleshootingEvents?: MobileAppTroubleshootingEvent[];
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mobilePhone?: string;
    /** The URL for the user's personal site. Returned only on $select. */
    mySite?: string;
    /** The notifications property */
    notifications?: Notification[];
    /** The oauth2PermissionGrants property */
    oauth2PermissionGrants?: OAuth2PermissionGrant[];
    /** The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    officeLocation?: string;
    /** The onenote property */
    onenote?: Onenote;
    /** The onlineMeetings property */
    onlineMeetings?: OnlineMeeting[];
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    onPremisesDistinguishedName?: string;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    onPremisesDomainName?: string;
    /** The onPremisesExtensionAttributes property */
    onPremisesExtensionAttributes?: OnPremisesExtensionAttributes;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesImmutableId?: string;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?: Date;
    /** Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le). */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /** Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesSamAccountName?: string;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values). */
    onPremisesSecurityIdentifier?: string;
    /** true if this user object is currently being synced from an on-premises Active Directory (AD); otherwise the user isn't being synced and can be managed in Azure Active Directory (Azure AD). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?: boolean;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesUserPrincipalName?: string;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    otherMails?: string[];
    /** The outlook property */
    outlook?: OutlookUser;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand. */
    ownedDevices?: DirectoryObject[];
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). */
    ownedObjects?: DirectoryObject[];
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values). */
    passwordPolicies?: string;
    /** The passwordProfile property */
    passwordProfile?: PasswordProfile;
    /** A list for the user to enumerate their past projects. Returned only on $select. */
    pastProjects?: string[];
    /** Navigation property to get list of access reviews pending approval by reviewer. */
    pendingAccessReviewInstances?: AccessReviewInstance[];
    /** Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks. */
    people?: Person[];
    /** The photo property */
    photo?: ProfilePhoto;
    /** The photos property */
    photos?: ProfilePhoto[];
    /** The planner property */
    planner?: PlannerUser;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    postalCode?: string;
    /** The preferred data location for the user. For more information, see OneDrive Online Multi-Geo. */
    preferredDataLocation?: string;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    preferredLanguage?: string;
    /** The preferred name for the user. Not Supported. This attribute returns an empty string.Returned only on $select. */
    preferredName?: string;
    /** The presence property */
    presence?: Presence;
    /** The print property */
    print?: UserPrint;
    /** The profile property */
    profile?: Profile;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le). */
    provisionedPlans?: ProvisionedPlan[];
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    proxyAddresses?: string[];
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use invalidateAllRefreshTokens to reset. */
    refreshTokensValidFromDateTime?: Date;
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand. */
    registeredDevices?: DirectoryObject[];
    /** A list for the user to enumerate their responsibilities. Returned only on $select. */
    responsibilities?: string[];
    /** A list for the user to enumerate the schools they have attended. Returned only on $select. */
    schools?: string[];
    /** The scoped-role administrative unit memberships for this user. Read-only. Nullable. */
    scopedRoleMemberOf?: ScopedRoleMembership[];
    /** The security property */
    security?: Security;
    /** Security identifier (SID) of the user, used in Windows scenarios. Read-only. Returned by default. Supports $select and $filter (eq, not, ge, le, startsWith). */
    securityIdentifier?: string;
    /** The settings property */
    settings?: UserSettings;
    /** Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue. */
    showInAddressList?: boolean;
    /** The signInActivity property */
    signInActivity?: SignInActivity;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. */
    signInSessionsValidFromDateTime?: Date;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    skills?: string[];
    /** The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    state?: string;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    streetAddress?: string;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    surname?: string;
    /** The teamwork property */
    teamwork?: UserTeamwork;
    /** The todo property */
    todo?: Todo;
    /** The groups, including nested groups, and directory roles that a user is a member of. Nullable. */
    transitiveMemberOf?: DirectoryObject[];
    /** The transitive reports for a user. Read-only. */
    transitiveReports?: DirectoryObject[];
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    usageLocation?: string;
    /** Represents the usage rights a user has been granted. */
    usageRights?: UsageRight[];
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    userPrincipalName?: string;
    /** A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    userType?: string;
    /** Zero or more WIP device registrations that belong to the user. */
    windowsInformationProtectionDeviceRegistrations?: WindowsInformationProtectionDeviceRegistration[];
}
