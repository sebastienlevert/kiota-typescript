import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createAppManagementPolicyFromDiscriminatorValue} from './createAppManagementPolicyFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {createCustomSecurityAttributeValueFromDiscriminatorValue} from './createCustomSecurityAttributeValueFromDiscriminatorValue';
import {createDelegatedPermissionClassificationFromDiscriminatorValue} from './createDelegatedPermissionClassificationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFederatedIdentityCredentialFromDiscriminatorValue} from './createFederatedIdentityCredentialFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createInformationalUrlFromDiscriminatorValue} from './createInformationalUrlFromDiscriminatorValue';
import {createKeyCredentialFromDiscriminatorValue} from './createKeyCredentialFromDiscriminatorValue';
import {createLicenseDetailsFromDiscriminatorValue} from './createLicenseDetailsFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from './createPasswordCredentialFromDiscriminatorValue';
import {createPasswordSingleSignOnSettingsFromDiscriminatorValue} from './createPasswordSingleSignOnSettingsFromDiscriminatorValue';
import {createPermissionScopeFromDiscriminatorValue} from './createPermissionScopeFromDiscriminatorValue';
import {createSamlSingleSignOnSettingsFromDiscriminatorValue} from './createSamlSingleSignOnSettingsFromDiscriminatorValue';
import {createSynchronizationFromDiscriminatorValue} from './createSynchronizationFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createVerifiedPublisherFromDiscriminatorValue} from './createVerifiedPublisherFromDiscriminatorValue';
import {AddIn, AppManagementPolicy, AppRole, AppRoleAssignment, ClaimsMappingPolicy, CustomSecurityAttributeValue, DelegatedPermissionClassification, DirectoryObject, Endpoint, FederatedIdentityCredential, HomeRealmDiscoveryPolicy, InformationalUrl, KeyCredential, LicenseDetails, OAuth2PermissionGrant, PasswordCredential, PasswordSingleSignOnSettings, PermissionScope, SamlSingleSignOnSettings, Synchronization, TokenIssuancePolicy, TokenLifetimePolicy, VerifiedPublisher} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

interface Guid{}
export class ServicePrincipal extends DirectoryObject implements Parsable {
    /** true if the service principal account is enabled; otherwise, false. If set to false, then no users will be able to sign in to this app, even if they are assigned to it. Supports $filter (eq, ne, not, in). */
    private _accountEnabled?: boolean | undefined;
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on. */
    private _addIns?: AddIn[] | undefined;
    /** Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith). */
    private _alternativeNames?: string[] | undefined;
    /** The description exposed by the associated application. */
    private _appDescription?: string | undefined;
    /** The display name exposed by the associated application. */
    private _appDisplayName?: string | undefined;
    /** The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith). */
    private _appId?: string | undefined;
    /** Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith). */
    private _applicationTemplateId?: string | undefined;
    /** The appManagementPolicy applied to this service principal. */
    private _appManagementPolicies?: AppManagementPolicy[] | undefined;
    /** Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le). */
    private _appOwnerOrganizationId?: string | undefined;
    /** App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand. */
    private _appRoleAssignedTo?: AppRoleAssignment[] | undefined;
    /** Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT). */
    private _appRoleAssignmentRequired?: boolean | undefined;
    /** App role assignment for another app or service, granted to this service principal. Supports $expand. */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable. */
    private _appRoles?: AppRole[] | undefined;
    /** The claimsMappingPolicies assigned to this service principal. Supports $expand. */
    private _claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** Directory objects created by this service principal. Read-only. Nullable. */
    private _createdObjects?: DirectoryObject[] | undefined;
    /** The customSecurityAttributes property */
    private _customSecurityAttributes?: CustomSecurityAttributeValue | undefined;
    /** The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand. */
    private _delegatedPermissionClassifications?: DelegatedPermissionClassification[] | undefined;
    /** Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    private _disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences. */
    private _endpoints?: Endpoint[] | undefined;
    /** Deprecated. Don't use. */
    private _errorUrl?: string | undefined;
    /** The federatedIdentityCredentials property */
    private _federatedIdentityCredentials?: FederatedIdentityCredential[] | undefined;
    /** Home page or landing page of the application. */
    private _homepage?: string | undefined;
    /** The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand. */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** The info property */
    private _info?: InformationalUrl | undefined;
    /** The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le). */
    private _keyCredentials?: KeyCredential[] | undefined;
    /** The licenseDetails property */
    private _licenseDetails?: LicenseDetails[] | undefined;
    /** Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL. */
    private _loginUrl?: string | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols. */
    private _logoutUrl?: string | undefined;
    /** Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters. */
    private _notes?: string | undefined;
    /** Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications. */
    private _notificationEmailAddresses?: string[] | undefined;
    /** Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable. */
    private _oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). */
    private _ownedObjects?: DirectoryObject[] | undefined;
    /** Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable.  Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). */
    private _owners?: DirectoryObject[] | undefined;
    /** The collection of password credentials associated with the service principal. Not nullable. */
    private _passwordCredentials?: PasswordCredential[] | undefined;
    /** The passwordSingleSignOnSettings property */
    private _passwordSingleSignOnSettings?: PasswordSingleSignOnSettings | undefined;
    /** Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc. */
    private _preferredSingleSignOnMode?: string | undefined;
    /** Specifies the expiration date of the keyCredential used for token signing, marked by preferredTokenSigningKeyThumbprint. */
    private _preferredTokenSigningKeyEndDateTime?: Date | undefined;
    /** Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions. */
    private _preferredTokenSigningKeyThumbprint?: string | undefined;
    /** The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable. Note: This property is named oauth2PermissionScopes in v1.0. */
    private _publishedPermissionScopes?: PermissionScope[] | undefined;
    /** The name of the Azure AD tenant that published the application. */
    private _publisherName?: string | undefined;
    /** The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable. */
    private _replyUrls?: string[] | undefined;
    /** The url where the service exposes SAML metadata for federation. */
    private _samlMetadataUrl?: string | undefined;
    /** The samlSingleSignOnSettings property */
    private _samlSingleSignOnSettings?: SamlSingleSignOnSettings | undefined;
    /** Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith). */
    private _servicePrincipalNames?: string[] | undefined;
    /** Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use. */
    private _servicePrincipalType?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only. */
    private _signInAudience?: string | undefined;
    /** The synchronization property */
    private _synchronization?: Synchronization | undefined;
    /** Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith). */
    private _tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    private _tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies assigned to this service principal. Supports $expand. */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this service principal. Supports $expand. */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** The verifiedPublisher property */
    private _verifiedPublisher?: VerifiedPublisher | undefined;
    /**
     * Gets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. If set to false, then no users will be able to sign in to this app, even if they are assigned to it. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. If set to false, then no users will be able to sign in to this app, even if they are assigned to it. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @returns a addIn
     */
    public get addIns() {
        return this._addIns;
    };
    /**
     * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @param value Value to set for the addIns property.
     */
    public set addIns(value: AddIn[] | undefined) {
        this._addIns = value;
    };
    /**
     * Gets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get alternativeNames() {
        return this._alternativeNames;
    };
    /**
     * Sets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the alternativeNames property.
     */
    public set alternativeNames(value: string[] | undefined) {
        this._alternativeNames = value;
    };
    /**
     * Gets the appDescription property value. The description exposed by the associated application.
     * @returns a string
     */
    public get appDescription() {
        return this._appDescription;
    };
    /**
     * Sets the appDescription property value. The description exposed by the associated application.
     * @param value Value to set for the appDescription property.
     */
    public set appDescription(value: string | undefined) {
        this._appDescription = value;
    };
    /**
     * Gets the appDisplayName property value. The display name exposed by the associated application.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The display name exposed by the associated application.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Gets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @returns a string
     */
    public get applicationTemplateId() {
        return this._applicationTemplateId;
    };
    /**
     * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @param value Value to set for the applicationTemplateId property.
     */
    public set applicationTemplateId(value: string | undefined) {
        this._applicationTemplateId = value;
    };
    /**
     * Gets the appManagementPolicies property value. The appManagementPolicy applied to this service principal.
     * @returns a appManagementPolicy
     */
    public get appManagementPolicies() {
        return this._appManagementPolicies;
    };
    /**
     * Sets the appManagementPolicies property value. The appManagementPolicy applied to this service principal.
     * @param value Value to set for the appManagementPolicies property.
     */
    public set appManagementPolicies(value: AppManagementPolicy[] | undefined) {
        this._appManagementPolicies = value;
    };
    /**
     * Gets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
     * @returns a Guid
     */
    public get appOwnerOrganizationId() {
        return this._appOwnerOrganizationId;
    };
    /**
     * Sets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
     * @param value Value to set for the appOwnerOrganizationId property.
     */
    public set appOwnerOrganizationId(value: string | undefined) {
        this._appOwnerOrganizationId = value;
    };
    /**
     * Gets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignedTo() {
        return this._appRoleAssignedTo;
    };
    /**
     * Sets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
     * @param value Value to set for the appRoleAssignedTo property.
     */
    public set appRoleAssignedTo(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignedTo = value;
    };
    /**
     * Gets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @returns a boolean
     */
    public get appRoleAssignmentRequired() {
        return this._appRoleAssignmentRequired;
    };
    /**
     * Sets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @param value Value to set for the appRoleAssignmentRequired property.
     */
    public set appRoleAssignmentRequired(value: boolean | undefined) {
        this._appRoleAssignmentRequired = value;
    };
    /**
     * Gets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignments = value;
    };
    /**
     * Gets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @returns a appRole
     */
    public get appRoles() {
        return this._appRoles;
    };
    /**
     * Sets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @param value Value to set for the appRoles property.
     */
    public set appRoles(value: AppRole[] | undefined) {
        this._appRoles = value;
    };
    /**
     * Gets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @returns a claimsMappingPolicy
     */
    public get claimsMappingPolicies() {
        return this._claimsMappingPolicies;
    };
    /**
     * Sets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the claimsMappingPolicies property.
     */
    public set claimsMappingPolicies(value: ClaimsMappingPolicy[] | undefined) {
        this._claimsMappingPolicies = value;
    };
    /**
     * Instantiates a new servicePrincipal and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @returns a directoryObject
     */
    public get createdObjects() {
        return this._createdObjects;
    };
    /**
     * Sets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @param value Value to set for the createdObjects property.
     */
    public set createdObjects(value: DirectoryObject[] | undefined) {
        this._createdObjects = value;
    };
    /**
     * Gets the customSecurityAttributes property value. The customSecurityAttributes property
     * @returns a customSecurityAttributeValue
     */
    public get customSecurityAttributes() {
        return this._customSecurityAttributes;
    };
    /**
     * Sets the customSecurityAttributes property value. The customSecurityAttributes property
     * @param value Value to set for the customSecurityAttributes property.
     */
    public set customSecurityAttributes(value: CustomSecurityAttributeValue | undefined) {
        this._customSecurityAttributes = value;
    };
    /**
     * Gets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @returns a delegatedPermissionClassification
     */
    public get delegatedPermissionClassifications() {
        return this._delegatedPermissionClassifications;
    };
    /**
     * Sets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @param value Value to set for the delegatedPermissionClassifications property.
     */
    public set delegatedPermissionClassifications(value: DelegatedPermissionClassification[] | undefined) {
        this._delegatedPermissionClassifications = value;
    };
    /**
     * Gets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @returns a string
     */
    public get disabledByMicrosoftStatus() {
        return this._disabledByMicrosoftStatus;
    };
    /**
     * Sets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @param value Value to set for the disabledByMicrosoftStatus property.
     */
    public set disabledByMicrosoftStatus(value: string | undefined) {
        this._disabledByMicrosoftStatus = value;
    };
    /**
     * Gets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @returns a endpoint
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * Sets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: Endpoint[] | undefined) {
        this._endpoints = value;
    };
    /**
     * Gets the errorUrl property value. Deprecated. Don't use.
     * @returns a string
     */
    public get errorUrl() {
        return this._errorUrl;
    };
    /**
     * Sets the errorUrl property value. Deprecated. Don't use.
     * @param value Value to set for the errorUrl property.
     */
    public set errorUrl(value: string | undefined) {
        this._errorUrl = value;
    };
    /**
     * Gets the federatedIdentityCredentials property value. The federatedIdentityCredentials property
     * @returns a federatedIdentityCredential
     */
    public get federatedIdentityCredentials() {
        return this._federatedIdentityCredentials;
    };
    /**
     * Sets the federatedIdentityCredentials property value. The federatedIdentityCredentials property
     * @param value Value to set for the federatedIdentityCredentials property.
     */
    public set federatedIdentityCredentials(value: FederatedIdentityCredential[] | undefined) {
        this._federatedIdentityCredentials = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "addIns": n => { this.addIns = n.getCollectionOfObjectValues<AddIn>(createAddInFromDiscriminatorValue); },
            "alternativeNames": n => { this.alternativeNames = n.getCollectionOfPrimitiveValues<string>(); },
            "appDescription": n => { this.appDescription = n.getStringValue(); },
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "applicationTemplateId": n => { this.applicationTemplateId = n.getStringValue(); },
            "appManagementPolicies": n => { this.appManagementPolicies = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
            "appOwnerOrganizationId": n => { this.appOwnerOrganizationId = n.getGuidValue(); },
            "appRoleAssignedTo": n => { this.appRoleAssignedTo = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
            "appRoleAssignmentRequired": n => { this.appRoleAssignmentRequired = n.getBooleanValue(); },
            "appRoleAssignments": n => { this.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
            "appRoles": n => { this.appRoles = n.getCollectionOfObjectValues<AppRole>(createAppRoleFromDiscriminatorValue); },
            "claimsMappingPolicies": n => { this.claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(createClaimsMappingPolicyFromDiscriminatorValue); },
            "createdObjects": n => { this.createdObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "customSecurityAttributes": n => { this.customSecurityAttributes = n.getObjectValue<CustomSecurityAttributeValue>(createCustomSecurityAttributeValueFromDiscriminatorValue); },
            "delegatedPermissionClassifications": n => { this.delegatedPermissionClassifications = n.getCollectionOfObjectValues<DelegatedPermissionClassification>(createDelegatedPermissionClassificationFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "disabledByMicrosoftStatus": n => { this.disabledByMicrosoftStatus = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endpoints": n => { this.endpoints = n.getCollectionOfObjectValues<Endpoint>(createEndpointFromDiscriminatorValue); },
            "errorUrl": n => { this.errorUrl = n.getStringValue(); },
            "federatedIdentityCredentials": n => { this.federatedIdentityCredentials = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
            "homepage": n => { this.homepage = n.getStringValue(); },
            "homeRealmDiscoveryPolicies": n => { this.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
            "info": n => { this.info = n.getObjectValue<InformationalUrl>(createInformationalUrlFromDiscriminatorValue); },
            "keyCredentials": n => { this.keyCredentials = n.getCollectionOfObjectValues<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
            "licenseDetails": n => { this.licenseDetails = n.getCollectionOfObjectValues<LicenseDetails>(createLicenseDetailsFromDiscriminatorValue); },
            "loginUrl": n => { this.loginUrl = n.getStringValue(); },
            "logoutUrl": n => { this.logoutUrl = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "notes": n => { this.notes = n.getStringValue(); },
            "notificationEmailAddresses": n => { this.notificationEmailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "oauth2PermissionGrants": n => { this.oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); },
            "ownedObjects": n => { this.ownedObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "passwordCredentials": n => { this.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
            "passwordSingleSignOnSettings": n => { this.passwordSingleSignOnSettings = n.getObjectValue<PasswordSingleSignOnSettings>(createPasswordSingleSignOnSettingsFromDiscriminatorValue); },
            "preferredSingleSignOnMode": n => { this.preferredSingleSignOnMode = n.getStringValue(); },
            "preferredTokenSigningKeyEndDateTime": n => { this.preferredTokenSigningKeyEndDateTime = n.getDateValue(); },
            "preferredTokenSigningKeyThumbprint": n => { this.preferredTokenSigningKeyThumbprint = n.getStringValue(); },
            "publishedPermissionScopes": n => { this.publishedPermissionScopes = n.getCollectionOfObjectValues<PermissionScope>(createPermissionScopeFromDiscriminatorValue); },
            "publisherName": n => { this.publisherName = n.getStringValue(); },
            "replyUrls": n => { this.replyUrls = n.getCollectionOfPrimitiveValues<string>(); },
            "samlMetadataUrl": n => { this.samlMetadataUrl = n.getStringValue(); },
            "samlSingleSignOnSettings": n => { this.samlSingleSignOnSettings = n.getObjectValue<SamlSingleSignOnSettings>(createSamlSingleSignOnSettingsFromDiscriminatorValue); },
            "servicePrincipalNames": n => { this.servicePrincipalNames = n.getCollectionOfPrimitiveValues<string>(); },
            "servicePrincipalType": n => { this.servicePrincipalType = n.getStringValue(); },
            "signInAudience": n => { this.signInAudience = n.getStringValue(); },
            "synchronization": n => { this.synchronization = n.getObjectValue<Synchronization>(createSynchronizationFromDiscriminatorValue); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "tokenEncryptionKeyId": n => { this.tokenEncryptionKeyId = n.getGuidValue(); },
            "tokenIssuancePolicies": n => { this.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
            "tokenLifetimePolicies": n => { this.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "verifiedPublisher": n => { this.verifiedPublisher = n.getObjectValue<VerifiedPublisher>(createVerifiedPublisherFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the homepage property value. Home page or landing page of the application.
     * @returns a string
     */
    public get homepage() {
        return this._homepage;
    };
    /**
     * Sets the homepage property value. Home page or landing page of the application.
     * @param value Value to set for the homepage property.
     */
    public set homepage(value: string | undefined) {
        this._homepage = value;
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     * @returns a homeRealmDiscoveryPolicy
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        this._homeRealmDiscoveryPolicies = value;
    };
    /**
     * Gets the info property value. The info property
     * @returns a informationalUrl
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. The info property
     * @param value Value to set for the info property.
     */
    public set info(value: InformationalUrl | undefined) {
        this._info = value;
    };
    /**
     * Gets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a keyCredential
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Sets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredential[] | undefined) {
        this._keyCredentials = value;
    };
    /**
     * Gets the licenseDetails property value. The licenseDetails property
     * @returns a licenseDetails
     */
    public get licenseDetails() {
        return this._licenseDetails;
    };
    /**
     * Sets the licenseDetails property value. The licenseDetails property
     * @param value Value to set for the licenseDetails property.
     */
    public set licenseDetails(value: LicenseDetails[] | undefined) {
        this._licenseDetails = value;
    };
    /**
     * Gets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @returns a string
     */
    public get loginUrl() {
        return this._loginUrl;
    };
    /**
     * Sets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @param value Value to set for the loginUrl property.
     */
    public set loginUrl(value: string | undefined) {
        this._loginUrl = value;
    };
    /**
     * Gets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @returns a string
     */
    public get logoutUrl() {
        return this._logoutUrl;
    };
    /**
     * Sets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @param value Value to set for the logoutUrl property.
     */
    public set logoutUrl(value: string | undefined) {
        this._logoutUrl = value;
    };
    /**
     * Gets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @returns a string
     */
    public get notificationEmailAddresses() {
        return this._notificationEmailAddresses;
    };
    /**
     * Sets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @param value Value to set for the notificationEmailAddresses property.
     */
    public set notificationEmailAddresses(value: string[] | undefined) {
        this._notificationEmailAddresses = value;
    };
    /**
     * Gets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @returns a oAuth2PermissionGrant
     */
    public get oauth2PermissionGrants() {
        return this._oauth2PermissionGrants;
    };
    /**
     * Sets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @param value Value to set for the oauth2PermissionGrants property.
     */
    public set oauth2PermissionGrants(value: OAuth2PermissionGrant[] | undefined) {
        this._oauth2PermissionGrants = value;
    };
    /**
     * Gets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @returns a directoryObject
     */
    public get ownedObjects() {
        return this._ownedObjects;
    };
    /**
     * Sets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @param value Value to set for the ownedObjects property.
     */
    public set ownedObjects(value: DirectoryObject[] | undefined) {
        this._ownedObjects = value;
    };
    /**
     * Gets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable.  Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @returns a directoryObject
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable.  Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        this._owners = value;
    };
    /**
     * Gets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
     * @returns a passwordCredential
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Sets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredential[] | undefined) {
        this._passwordCredentials = value;
    };
    /**
     * Gets the passwordSingleSignOnSettings property value. The passwordSingleSignOnSettings property
     * @returns a passwordSingleSignOnSettings
     */
    public get passwordSingleSignOnSettings() {
        return this._passwordSingleSignOnSettings;
    };
    /**
     * Sets the passwordSingleSignOnSettings property value. The passwordSingleSignOnSettings property
     * @param value Value to set for the passwordSingleSignOnSettings property.
     */
    public set passwordSingleSignOnSettings(value: PasswordSingleSignOnSettings | undefined) {
        this._passwordSingleSignOnSettings = value;
    };
    /**
     * Gets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @returns a string
     */
    public get preferredSingleSignOnMode() {
        return this._preferredSingleSignOnMode;
    };
    /**
     * Sets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @param value Value to set for the preferredSingleSignOnMode property.
     */
    public set preferredSingleSignOnMode(value: string | undefined) {
        this._preferredSingleSignOnMode = value;
    };
    /**
     * Gets the preferredTokenSigningKeyEndDateTime property value. Specifies the expiration date of the keyCredential used for token signing, marked by preferredTokenSigningKeyThumbprint.
     * @returns a Date
     */
    public get preferredTokenSigningKeyEndDateTime() {
        return this._preferredTokenSigningKeyEndDateTime;
    };
    /**
     * Sets the preferredTokenSigningKeyEndDateTime property value. Specifies the expiration date of the keyCredential used for token signing, marked by preferredTokenSigningKeyThumbprint.
     * @param value Value to set for the preferredTokenSigningKeyEndDateTime property.
     */
    public set preferredTokenSigningKeyEndDateTime(value: Date | undefined) {
        this._preferredTokenSigningKeyEndDateTime = value;
    };
    /**
     * Gets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @returns a string
     */
    public get preferredTokenSigningKeyThumbprint() {
        return this._preferredTokenSigningKeyThumbprint;
    };
    /**
     * Sets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @param value Value to set for the preferredTokenSigningKeyThumbprint property.
     */
    public set preferredTokenSigningKeyThumbprint(value: string | undefined) {
        this._preferredTokenSigningKeyThumbprint = value;
    };
    /**
     * Gets the publishedPermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable. Note: This property is named oauth2PermissionScopes in v1.0.
     * @returns a permissionScope
     */
    public get publishedPermissionScopes() {
        return this._publishedPermissionScopes;
    };
    /**
     * Sets the publishedPermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable. Note: This property is named oauth2PermissionScopes in v1.0.
     * @param value Value to set for the publishedPermissionScopes property.
     */
    public set publishedPermissionScopes(value: PermissionScope[] | undefined) {
        this._publishedPermissionScopes = value;
    };
    /**
     * Gets the publisherName property value. The name of the Azure AD tenant that published the application.
     * @returns a string
     */
    public get publisherName() {
        return this._publisherName;
    };
    /**
     * Sets the publisherName property value. The name of the Azure AD tenant that published the application.
     * @param value Value to set for the publisherName property.
     */
    public set publisherName(value: string | undefined) {
        this._publisherName = value;
    };
    /**
     * Gets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @returns a string
     */
    public get replyUrls() {
        return this._replyUrls;
    };
    /**
     * Sets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @param value Value to set for the replyUrls property.
     */
    public set replyUrls(value: string[] | undefined) {
        this._replyUrls = value;
    };
    /**
     * Gets the samlMetadataUrl property value. The url where the service exposes SAML metadata for federation.
     * @returns a string
     */
    public get samlMetadataUrl() {
        return this._samlMetadataUrl;
    };
    /**
     * Sets the samlMetadataUrl property value. The url where the service exposes SAML metadata for federation.
     * @param value Value to set for the samlMetadataUrl property.
     */
    public set samlMetadataUrl(value: string | undefined) {
        this._samlMetadataUrl = value;
    };
    /**
     * Gets the samlSingleSignOnSettings property value. The samlSingleSignOnSettings property
     * @returns a samlSingleSignOnSettings
     */
    public get samlSingleSignOnSettings() {
        return this._samlSingleSignOnSettings;
    };
    /**
     * Sets the samlSingleSignOnSettings property value. The samlSingleSignOnSettings property
     * @param value Value to set for the samlSingleSignOnSettings property.
     */
    public set samlSingleSignOnSettings(value: SamlSingleSignOnSettings | undefined) {
        this._samlSingleSignOnSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues<AddIn>("addIns", this.addIns);
        writer.writeCollectionOfPrimitiveValues<string>("alternativeNames", this.alternativeNames);
        writer.writeStringValue("appDescription", this.appDescription);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        writer.writeCollectionOfObjectValues<AppManagementPolicy>("appManagementPolicies", this.appManagementPolicies);
       // //writer.writeGuidValue("appOwnerOrganizationId", this.appOwnerOrganizationId);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignedTo", this.appRoleAssignedTo);
        writer.writeBooleanValue("appRoleAssignmentRequired", this.appRoleAssignmentRequired);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues<AppRole>("appRoles", this.appRoles);
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("claimsMappingPolicies", this.claimsMappingPolicies);
        writer.writeCollectionOfObjectValues<DirectoryObject>("createdObjects", this.createdObjects);
        writer.writeObjectValue<CustomSecurityAttributeValue>("customSecurityAttributes", this.customSecurityAttributes);
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassification>("delegatedPermissionClassifications", this.delegatedPermissionClassifications);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Endpoint>("endpoints", this.endpoints);
        writer.writeStringValue("errorUrl", this.errorUrl);
        writer.writeCollectionOfObjectValues<FederatedIdentityCredential>("federatedIdentityCredentials", this.federatedIdentityCredentials);
        writer.writeStringValue("homepage", this.homepage);
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeObjectValue<InformationalUrl>("info", this.info);
        writer.writeCollectionOfObjectValues<KeyCredential>("keyCredentials", this.keyCredentials);
        writer.writeCollectionOfObjectValues<LicenseDetails>("licenseDetails", this.licenseDetails);
        writer.writeStringValue("loginUrl", this.loginUrl);
        writer.writeStringValue("logoutUrl", this.logoutUrl);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeStringValue("notes", this.notes);
        writer.writeCollectionOfPrimitiveValues<string>("notificationEmailAddresses", this.notificationEmailAddresses);
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("oauth2PermissionGrants", this.oauth2PermissionGrants);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedObjects", this.ownedObjects);
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", this.owners);
        writer.writeCollectionOfObjectValues<PasswordCredential>("passwordCredentials", this.passwordCredentials);
        writer.writeObjectValue<PasswordSingleSignOnSettings>("passwordSingleSignOnSettings", this.passwordSingleSignOnSettings);
        writer.writeStringValue("preferredSingleSignOnMode", this.preferredSingleSignOnMode);
        writer.writeDateValue("preferredTokenSigningKeyEndDateTime", this.preferredTokenSigningKeyEndDateTime);
        writer.writeStringValue("preferredTokenSigningKeyThumbprint", this.preferredTokenSigningKeyThumbprint);
        writer.writeCollectionOfObjectValues<PermissionScope>("publishedPermissionScopes", this.publishedPermissionScopes);
        writer.writeStringValue("publisherName", this.publisherName);
        writer.writeCollectionOfPrimitiveValues<string>("replyUrls", this.replyUrls);
        writer.writeStringValue("samlMetadataUrl", this.samlMetadataUrl);
        writer.writeObjectValue<SamlSingleSignOnSettings>("samlSingleSignOnSettings", this.samlSingleSignOnSettings);
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalNames", this.servicePrincipalNames);
        writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
        writer.writeStringValue("signInAudience", this.signInAudience);
        writer.writeObjectValue<Synchronization>("synchronization", this.synchronization);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        //writer.writeGuidValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("tokenLifetimePolicies", this.tokenLifetimePolicies);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeObjectValue<VerifiedPublisher>("verifiedPublisher", this.verifiedPublisher);
    };
    /**
     * Gets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get servicePrincipalNames() {
        return this._servicePrincipalNames;
    };
    /**
     * Sets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the servicePrincipalNames property.
     */
    public set servicePrincipalNames(value: string[] | undefined) {
        this._servicePrincipalNames = value;
    };
    /**
     * Gets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use.
     * @returns a string
     */
    public get servicePrincipalType() {
        return this._servicePrincipalType;
    };
    /**
     * Sets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use.
     * @param value Value to set for the servicePrincipalType property.
     */
    public set servicePrincipalType(value: string | undefined) {
        this._servicePrincipalType = value;
    };
    /**
     * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @returns a string
     */
    public get signInAudience() {
        return this._signInAudience;
    };
    /**
     * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @param value Value to set for the signInAudience property.
     */
    public set signInAudience(value: string | undefined) {
        this._signInAudience = value;
    };
    /**
     * Gets the synchronization property value. The synchronization property
     * @returns a synchronization
     */
    public get synchronization() {
        return this._synchronization;
    };
    /**
     * Sets the synchronization property value. The synchronization property
     * @param value Value to set for the synchronization property.
     */
    public set synchronization(value: Synchronization | undefined) {
        this._synchronization = value;
    };
    /**
     * Gets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @returns a Guid
     */
    public get tokenEncryptionKeyId() {
        return this._tokenEncryptionKeyId;
    };
    /**
     * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @param value Value to set for the tokenEncryptionKeyId property.
     */
    public set tokenEncryptionKeyId(value: string | undefined) {
        this._tokenEncryptionKeyId = value;
    };
    /**
     * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
     * @returns a tokenIssuancePolicy
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        this._tokenIssuancePolicies = value;
    };
    /**
     * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
     * @returns a tokenLifetimePolicy
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        this._tokenLifetimePolicies = value;
    };
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Gets the verifiedPublisher property value. The verifiedPublisher property
     * @returns a verifiedPublisher
     */
    public get verifiedPublisher() {
        return this._verifiedPublisher;
    };
    /**
     * Sets the verifiedPublisher property value. The verifiedPublisher property
     * @param value Value to set for the verifiedPublisher property.
     */
    public set verifiedPublisher(value: VerifiedPublisher | undefined) {
        this._verifiedPublisher = value;
    };
}
