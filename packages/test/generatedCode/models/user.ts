import {AgreementAcceptance, AppRoleAssignment, AssignedLicense, AssignedPlan, Authentication, AuthorizationInfo, Calendar, CalendarGroup, Chat, Contact, ContactFolder, DeviceManagementTroubleshootingEvent, DirectoryObject, Drive, EmployeeOrgData, Event, Extension, InferenceClassification, LicenseAssignmentState, LicenseDetails, MailboxSettings, MailFolder, ManagedAppRegistration, ManagedDevice, Message, OAuth2PermissionGrant, ObjectIdentity, OfficeGraphInsights, Onenote, OnlineMeeting, OnPremisesExtensionAttributes, OnPremisesProvisioningError, OutlookUser, PasswordProfile, Person, PlannerUser, Presence, ProfilePhoto, ProvisionedPlan, ScopedRoleMembership, Site, Team, Todo, UserActivity, UserSettings, UserTeamwork} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface User extends DirectoryObject, Partial<Parsable> {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    aboutMe?: string;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Returned only on $select. Supports $filter (eq, ne, not, and in). */
    accountEnabled?: boolean;
    /** The user's activities across devices. Read-only. Nullable. */
    activities?: UserActivity[];
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in). */
    ageGroup?: string;
    /** The user's terms of use acceptance statuses. Read-only. Nullable. */
    agreementAcceptances?: AgreementAcceptance[];
    /** Represents the app roles a user has been granted for an application. Supports $expand. */
    appRoleAssignments?: AppRoleAssignment[];
    /** The licenses that are assigned to the user, including inherited (group-based) licenses. This property doesn't differentiate directly-assigned and inherited licenses. Use the licenseAssignmentStates property to identify the directly-assigned and inherited licenses.  Not nullable. Returned only on $select. Supports $filter (eq, not, /$count eq 0, /$count ne 0). */
    assignedLicenses?: AssignedLicense[];
    /** The plans that are assigned to the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq and not). */
    assignedPlans?: AssignedPlan[];
    /** The authentication methods that are supported for the user. */
    authentication?: Authentication;
    /** The authorizationInfo property */
    authorizationInfo?: AuthorizationInfo;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select. */
    birthday?: Date;
    /** The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. Read-only for users synced from on-premises directory. Returned by default. Supports $filter (eq, not, ge, le, startsWith). */
    businessPhones?: string[];
    /** The user's primary calendar. Read-only. */
    calendar?: Calendar;
    /** The user's calendar groups. Read-only. Nullable. */
    calendarGroups?: CalendarGroup[];
    /** The user's calendars. Read-only. Nullable. */
    calendars?: Calendar[];
    /** The calendar view for the calendar. Read-only. Nullable. */
    calendarView?: Event[];
    /** The chats property */
    chats?: Chat[];
    /** The city in which the user is located. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    city?: string;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    companyName?: string;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in). */
    consentProvidedForMinor?: string;
    /** The user's contacts folders. Read-only. Nullable. */
    contactFolders?: ContactFolder[];
    /** The user's contacts. Read-only. Nullable. */
    contacts?: Contact[];
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    country?: string;
    /** The date and time the user was created, in ISO 8601 format and in UTC time. The value cannot be modified and is automatically populated when the entity is created. Nullable. For on-premises users, the value represents when they were first created in Azure AD. Property is null for some users created before June 2018 and on-premises users that were synced to Azure AD before June 2018. Read-only.  Read-only. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in). */
    createdDateTime?: Date;
    /** Directory objects that were created by the user. Read-only. Nullable. */
    createdObjects?: DirectoryObject[];
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp). Read-only.Returned only on $select. Supports $filter (eq, ne, not, in). */
    creationType?: string;
    /** The name for the department in which the user works. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    department?: string;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    deviceEnrollmentLimit?: number;
    /** The list of troubleshooting events for this user. */
    deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand. */
    directReports?: DirectoryObject[];
    /** The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search. */
    displayName?: string;
    /** The user's OneDrive. Read-only. */
    drive?: Drive;
    /** A collection of drives available for this user. Read-only. */
    drives?: Drive[];
    /** The date and time when the user was hired or will start work in case of a future hire. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in). */
    employeeHireDate?: Date;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    employeeId?: string;
    /** Represents organization data (e.g. division and costCenter) associated with a user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in). */
    employeeOrgData?: EmployeeOrgData;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    employeeType?: string;
    /** The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable. */
    events?: Event[];
    /** The collection of open extensions defined for the user. Read-only. Supports $expand. Nullable. */
    extensions?: Extension[];
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Returned only on $select. Supports $filter (eq, ne, not , in). */
    externalUserState?: string;
    /** Shows the timestamp for the latest change to the externalUserState property. Returned only on $select. Supports $filter (eq, ne, not , in). */
    externalUserStateChangeDateTime?: Date;
    /** The fax number of the user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    faxNumber?: string;
    /** The followedSites property */
    followedSites?: Site[];
    /** The given name (first name) of the user. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    givenName?: string;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs. */
    hireDate?: Date;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Returned only on $select. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName. */
    identities?: ObjectIdentity[];
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith). */
    imAddresses?: string[];
    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance. */
    inferenceClassification?: InferenceClassification;
    /** The insights property */
    insights?: OfficeGraphInsights;
    /** A list for the user to describe their interests. Returned only on $select. */
    interests?: string[];
    /** Do not use – reserved for future use. */
    isResourceAccount?: boolean;
    /** The user's job title. Maximum length is 128 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    jobTitle?: string;
    /** The joinedTeams property */
    joinedTeams?: Team[];
    /** The time when this Azure AD user last changed their password or when their password was created, whichever date the latest action was performed. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select. */
    lastPasswordChangeDateTime?: Date;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. */
    legalAgeGroupClassification?: string;
    /** State of license assignments for this user. Also indicates licenses that are directly-assigned and those that the user has inherited through group memberships. Read-only. Returned only on $select. */
    licenseAssignmentStates?: LicenseAssignmentState[];
    /** A collection of this user's license details. Read-only. */
    licenseDetails?: LicenseDetails[];
    /** The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. This property cannot contain accent characters.  NOTE: We do not recommend updating this property for Azure AD B2C user profiles. Use the otherMails property instead. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values). */
    mail?: string;
    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. Returned only on $select. */
    mailboxSettings?: MailboxSettings;
    /** The user's mail folders. Read-only. Nullable. */
    mailFolders?: MailFolder[];
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mailNickname?: string;
    /** Zero or more managed app registrations that belong to the user. */
    managedAppRegistrations?: ManagedAppRegistration[];
    /** The managed devices associated with the user. */
    managedDevices?: ManagedDevice[];
    /** The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand. */
    manager?: DirectoryObject;
    /** The groups and directory roles that the user is a member of. Read-only. Nullable. Supports $expand. */
    memberOf?: DirectoryObject[];
    /** The messages in a mailbox or folder. Read-only. Nullable. */
    messages?: Message[];
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mobilePhone?: string;
    /** The URL for the user's personal site. Returned only on $select. */
    mySite?: string;
    /** The oauth2PermissionGrants property */
    oauth2PermissionGrants?: OAuth2PermissionGrant[];
    /** The office location in the user's place of business. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    officeLocation?: string;
    /** The onenote property */
    onenote?: Onenote;
    /** The onlineMeetings property */
    onlineMeetings?: OnlineMeeting[];
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. */
    onPremisesDistinguishedName?: string;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. */
    onPremisesDomainName?: string;
    /** Contains extensionAttributes1-15 for the user. These extension attributes are also known as Exchange custom attributes 1-15. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. Returned only on $select. Supports $filter (eq, ne, not, in). */
    onPremisesExtensionAttributes?: OnPremisesExtensionAttributes;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. NOTE: The $ and _ characters cannot be used when specifying this property. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in).. */
    onPremisesImmutableId?: string;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: 2013-02-16T03:04:54Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?: Date;
    /** Errors when using Microsoft synchronization product during provisioning. Returned only on $select. Supports $filter (eq, not, ge, le). */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /** Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesSamAccountName?: string;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Returned only on $select.  Supports $filter (eq including on null values). */
    onPremisesSecurityIdentifier?: string;
    /** true if this user object is currently being synced from an on-premises Active Directory (AD); otherwise the user isn't being synced and can be managed in Azure Active Directory (Azure AD). Read-only. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?: boolean;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesUserPrincipalName?: string;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. NOTE: This property cannot contain accent characters. Returned only on $select. Supports $filter (eq, not, ge, le, in, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    otherMails?: string[];
    /** The outlook property */
    outlook?: OutlookUser;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). */
    ownedDevices?: DirectoryObject[];
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand. */
    ownedObjects?: DirectoryObject[];
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. Returned only on $select. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values). */
    passwordPolicies?: string;
    /** Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon.Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). */
    passwordProfile?: PasswordProfile;
    /** A list for the user to enumerate their past projects. Returned only on $select. */
    pastProjects?: string[];
    /** People that are relevant to the user. Read-only. Nullable. */
    people?: Person[];
    /** The user's profile photo. Read-only. */
    photo?: ProfilePhoto;
    /** The photos property */
    photos?: ProfilePhoto[];
    /** Entry-point to the Planner resource that might exist for a user. Read-only. */
    planner?: PlannerUser;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    postalCode?: string;
    /** The preferred data location for the user. For more information, see OneDrive Online Multi-Geo. */
    preferredDataLocation?: string;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values) */
    preferredLanguage?: string;
    /** The preferred name for the user. Not Supported. This attribute returns an empty string.Returned only on $select. */
    preferredName?: string;
    /** The presence property */
    presence?: Presence;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le). */
    provisionedPlans?: ProvisionedPlan[];
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    proxyAddresses?: string[];
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand. */
    registeredDevices?: DirectoryObject[];
    /** A list for the user to enumerate their responsibilities. Returned only on $select. */
    responsibilities?: string[];
    /** A list for the user to enumerate the schools they have attended. Returned only on $select. */
    schools?: string[];
    /** The scopedRoleMemberOf property */
    scopedRoleMemberOf?: ScopedRoleMembership[];
    /** Security identifier (SID) of the user, used in Windows scenarios. Read-only. Returned by default. Supports $select and $filter (eq, not, ge, le, startsWith). */
    securityIdentifier?: string;
    /** The settings property */
    settings?: UserSettings;
    /** Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue. */
    showInAddressList?: boolean;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. Returned only on $select. */
    signInSessionsValidFromDateTime?: Date;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    skills?: string[];
    /** The state or province in the user's address. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    state?: string;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    streetAddress?: string;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    surname?: string;
    /** The teamwork property */
    teamwork?: UserTeamwork;
    /** Represents the To Do services available to a user. */
    todo?: Todo;
    /** The groups, including nested groups, and directory roles that a user is a member of. Nullable. */
    transitiveMemberOf?: DirectoryObject[];
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    usageLocation?: string;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    userPrincipalName?: string;
    /** A string value that can be used to classify user types in your directory, such as Member and Guest. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    userType?: string;
}
