import {createAlternativeSecurityIdFromDiscriminatorValue} from './createAlternativeSecurityIdFromDiscriminatorValue';
import {createCommandFromDiscriminatorValue} from './createCommandFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createOnPremisesExtensionAttributesFromDiscriminatorValue} from './createOnPremisesExtensionAttributesFromDiscriminatorValue';
import {createUsageRightFromDiscriminatorValue} from './createUsageRightFromDiscriminatorValue';
import {AlternativeSecurityId, Command, DirectoryObject, Extension, OnPremisesExtensionAttributes, UsageRight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Device extends DirectoryObject implements Parsable {
    /** true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property. */
    private _accountEnabled?: boolean | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le). */
    private _alternativeSecurityIds?: AlternativeSecurityId[] | undefined;
    /** The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy. */
    private _approximateLastSignInDateTime?: Date | undefined;
    /** Set of commands sent to this device. */
    private _commands?: Command[] | undefined;
    /** The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _complianceExpirationDateTime?: Date | undefined;
    /** User-defined property set by Intune to automatically add devices to groups and simplify managing devices. */
    private _deviceCategory?: string | undefined;
    /** Unique Identifier set by Azure Device Registration Service at the time of registration. This is an alternate key that can be used to reference the device object. Also Supports $filter (eq, ne, not, startsWith). */
    private _deviceId?: string | undefined;
    /** For internal use only. Set to null. */
    private _deviceMetadata?: string | undefined;
    /** Ownership of the device. This property is set by Intune. Possible values are: unknown, company, personal. */
    private _deviceOwnership?: string | undefined;
    /** For internal use only. */
    private _deviceVersion?: number | undefined;
    /** The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** The on-premises domain name of Hybrid Azure AD joined devices. This property is set by Intune. */
    private _domainName?: string | undefined;
    /** Enrollment profile applied to the device. For example, Apple Device Enrollment Profile, Device enrollment - Corporate device identifiers, or Windows Autopilot profile name. This property is set by Intune. */
    private _enrollmentProfileName?: string | undefined;
    /** Enrollment type of the device. This property is set by Intune. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement. */
    private _enrollmentType?: string | undefined;
    /** The extensionAttributes property */
    private _extensionAttributes?: OnPremisesExtensionAttributes | undefined;
    /** The collection of open extensions defined for the device. Read-only. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** List of hostNames for the device. */
    private _hostnames?: string[] | undefined;
    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    private _isCompliant?: boolean | undefined;
    /** true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    private _isManaged?: boolean | undefined;
    /** The isManagementRestricted property */
    private _isManagementRestricted?: boolean | undefined;
    /** true if device is rooted; false if device is jail-broken. This can only be updated by Intune. */
    private _isRooted?: boolean | undefined;
    /** Form factor of device. Only returned if user signs in with a Microsoft account as part of Project Rome. */
    private _kind?: string | undefined;
    /** Management channel of the device.  This property is set by Intune. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController. */
    private _managementType?: string | undefined;
    /** Manufacturer of the device. Read-only. */
    private _manufacturer?: string | undefined;
    /** Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith). */
    private _mdmAppId?: string | undefined;
    /** Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Model of the device. Read-only. */
    private _model?: string | undefined;
    /** Friendly name of a device. Only returned if user signs in with a Microsoft account as part of Project Rome. */
    private _name?: string | undefined;
    /** The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    private _operatingSystem?: string | undefined;
    /** Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    private _operatingSystemVersion?: string | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, /$count eq 0, /$count ne 0. */
    private _physicalIds?: string[] | undefined;
    /** Platform of device. Only returned if user signs in with a Microsoft account as part of Project Rome. Only returned if user signs in with a Microsoft account as part of Project Rome. */
    private _platform?: string | undefined;
    /** The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT. */
    private _profileType?: string | undefined;
    /** The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand. */
    private _registeredOwners?: DirectoryObject[] | undefined;
    /** Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand. */
    private _registeredUsers?: DirectoryObject[] | undefined;
    /** Date and time of when the device was registered. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _registrationDateTime?: Date | undefined;
    /** Device is online or offline. Only returned if user signs in with a Microsoft account as part of Project Rome. */
    private _status?: string | undefined;
    /** List of labels applied to the device by the system. Supports $filter (/$count eq 0, /$count ne 0). */
    private _systemLabels?: string[] | undefined;
    /** Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand. */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory */
    private _trustType?: string | undefined;
    /** Represents the usage rights a device has been granted. */
    private _usageRights?: UsageRight[] | undefined;
    /**
     * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Gets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a alternativeSecurityId
     */
    public get alternativeSecurityIds() {
        return this._alternativeSecurityIds;
    };
    /**
     * Sets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the alternativeSecurityIds property.
     */
    public set alternativeSecurityIds(value: AlternativeSecurityId[] | undefined) {
        this._alternativeSecurityIds = value;
    };
    /**
     * Gets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @returns a Date
     */
    public get approximateLastSignInDateTime() {
        return this._approximateLastSignInDateTime;
    };
    /**
     * Sets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @param value Value to set for the approximateLastSignInDateTime property.
     */
    public set approximateLastSignInDateTime(value: Date | undefined) {
        this._approximateLastSignInDateTime = value;
    };
    /**
     * Gets the commands property value. Set of commands sent to this device.
     * @returns a command
     */
    public get commands() {
        return this._commands;
    };
    /**
     * Sets the commands property value. Set of commands sent to this device.
     * @param value Value to set for the commands property.
     */
    public set commands(value: Command[] | undefined) {
        this._commands = value;
    };
    /**
     * Gets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get complianceExpirationDateTime() {
        return this._complianceExpirationDateTime;
    };
    /**
     * Sets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the complianceExpirationDateTime property.
     */
    public set complianceExpirationDateTime(value: Date | undefined) {
        this._complianceExpirationDateTime = value;
    };
    /**
     * Instantiates a new device and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceCategory property value. User-defined property set by Intune to automatically add devices to groups and simplify managing devices.
     * @returns a string
     */
    public get deviceCategory() {
        return this._deviceCategory;
    };
    /**
     * Sets the deviceCategory property value. User-defined property set by Intune to automatically add devices to groups and simplify managing devices.
     * @param value Value to set for the deviceCategory property.
     */
    public set deviceCategory(value: string | undefined) {
        this._deviceCategory = value;
    };
    /**
     * Gets the deviceId property value. Unique Identifier set by Azure Device Registration Service at the time of registration. This is an alternate key that can be used to reference the device object. Also Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Unique Identifier set by Azure Device Registration Service at the time of registration. This is an alternate key that can be used to reference the device object. Also Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the deviceMetadata property value. For internal use only. Set to null.
     * @returns a string
     */
    public get deviceMetadata() {
        return this._deviceMetadata;
    };
    /**
     * Sets the deviceMetadata property value. For internal use only. Set to null.
     * @param value Value to set for the deviceMetadata property.
     */
    public set deviceMetadata(value: string | undefined) {
        this._deviceMetadata = value;
    };
    /**
     * Gets the deviceOwnership property value. Ownership of the device. This property is set by Intune. Possible values are: unknown, company, personal.
     * @returns a string
     */
    public get deviceOwnership() {
        return this._deviceOwnership;
    };
    /**
     * Sets the deviceOwnership property value. Ownership of the device. This property is set by Intune. Possible values are: unknown, company, personal.
     * @param value Value to set for the deviceOwnership property.
     */
    public set deviceOwnership(value: string | undefined) {
        this._deviceOwnership = value;
    };
    /**
     * Gets the deviceVersion property value. For internal use only.
     * @returns a integer
     */
    public get deviceVersion() {
        return this._deviceVersion;
    };
    /**
     * Sets the deviceVersion property value. For internal use only.
     * @param value Value to set for the deviceVersion property.
     */
    public set deviceVersion(value: number | undefined) {
        this._deviceVersion = value;
    };
    /**
     * Gets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the domainName property value. The on-premises domain name of Hybrid Azure AD joined devices. This property is set by Intune.
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. The on-premises domain name of Hybrid Azure AD joined devices. This property is set by Intune.
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * Gets the enrollmentProfileName property value. Enrollment profile applied to the device. For example, Apple Device Enrollment Profile, Device enrollment - Corporate device identifiers, or Windows Autopilot profile name. This property is set by Intune.
     * @returns a string
     */
    public get enrollmentProfileName() {
        return this._enrollmentProfileName;
    };
    /**
     * Sets the enrollmentProfileName property value. Enrollment profile applied to the device. For example, Apple Device Enrollment Profile, Device enrollment - Corporate device identifiers, or Windows Autopilot profile name. This property is set by Intune.
     * @param value Value to set for the enrollmentProfileName property.
     */
    public set enrollmentProfileName(value: string | undefined) {
        this._enrollmentProfileName = value;
    };
    /**
     * Gets the enrollmentType property value. Enrollment type of the device. This property is set by Intune. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement.
     * @returns a string
     */
    public get enrollmentType() {
        return this._enrollmentType;
    };
    /**
     * Sets the enrollmentType property value. Enrollment type of the device. This property is set by Intune. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement.
     * @param value Value to set for the enrollmentType property.
     */
    public set enrollmentType(value: string | undefined) {
        this._enrollmentType = value;
    };
    /**
     * Gets the extensionAttributes property value. The extensionAttributes property
     * @returns a onPremisesExtensionAttributes
     */
    public get extensionAttributes() {
        return this._extensionAttributes;
    };
    /**
     * Sets the extensionAttributes property value. The extensionAttributes property
     * @param value Value to set for the extensionAttributes property.
     */
    public set extensionAttributes(value: OnPremisesExtensionAttributes | undefined) {
        this._extensionAttributes = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "alternativeSecurityIds": n => { this.alternativeSecurityIds = n.getCollectionOfObjectValues<AlternativeSecurityId>(createAlternativeSecurityIdFromDiscriminatorValue); },
            "approximateLastSignInDateTime": n => { this.approximateLastSignInDateTime = n.getDateValue(); },
            "commands": n => { this.commands = n.getCollectionOfObjectValues<Command>(createCommandFromDiscriminatorValue); },
            "complianceExpirationDateTime": n => { this.complianceExpirationDateTime = n.getDateValue(); },
            "deviceCategory": n => { this.deviceCategory = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceMetadata": n => { this.deviceMetadata = n.getStringValue(); },
            "deviceOwnership": n => { this.deviceOwnership = n.getStringValue(); },
            "deviceVersion": n => { this.deviceVersion = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
            "enrollmentProfileName": n => { this.enrollmentProfileName = n.getStringValue(); },
            "enrollmentType": n => { this.enrollmentType = n.getStringValue(); },
            "extensionAttributes": n => { this.extensionAttributes = n.getObjectValue<OnPremisesExtensionAttributes>(createOnPremisesExtensionAttributesFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "hostnames": n => { this.hostnames = n.getCollectionOfPrimitiveValues<string>(); },
            "isCompliant": n => { this.isCompliant = n.getBooleanValue(); },
            "isManaged": n => { this.isManaged = n.getBooleanValue(); },
            "isManagementRestricted": n => { this.isManagementRestricted = n.getBooleanValue(); },
            "isRooted": n => { this.isRooted = n.getBooleanValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "managementType": n => { this.managementType = n.getStringValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "mdmAppId": n => { this.mdmAppId = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "model": n => { this.model = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "operatingSystemVersion": n => { this.operatingSystemVersion = n.getStringValue(); },
            "physicalIds": n => { this.physicalIds = n.getCollectionOfPrimitiveValues<string>(); },
            "platform": n => { this.platform = n.getStringValue(); },
            "profileType": n => { this.profileType = n.getStringValue(); },
            "registeredOwners": n => { this.registeredOwners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "registeredUsers": n => { this.registeredUsers = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "registrationDateTime": n => { this.registrationDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "systemLabels": n => { this.systemLabels = n.getCollectionOfPrimitiveValues<string>(); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "trustType": n => { this.trustType = n.getStringValue(); },
            "usageRights": n => { this.usageRights = n.getCollectionOfObjectValues<UsageRight>(createUsageRightFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hostnames property value. List of hostNames for the device.
     * @returns a string
     */
    public get hostnames() {
        return this._hostnames;
    };
    /**
     * Sets the hostnames property value. List of hostNames for the device.
     * @param value Value to set for the hostnames property.
     */
    public set hostnames(value: string[] | undefined) {
        this._hostnames = value;
    };
    /**
     * Gets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isCompliant() {
        return this._isCompliant;
    };
    /**
     * Sets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isCompliant property.
     */
    public set isCompliant(value: boolean | undefined) {
        this._isCompliant = value;
    };
    /**
     * Gets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isManaged() {
        return this._isManaged;
    };
    /**
     * Sets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isManaged property.
     */
    public set isManaged(value: boolean | undefined) {
        this._isManaged = value;
    };
    /**
     * Gets the isManagementRestricted property value. The isManagementRestricted property
     * @returns a boolean
     */
    public get isManagementRestricted() {
        return this._isManagementRestricted;
    };
    /**
     * Sets the isManagementRestricted property value. The isManagementRestricted property
     * @param value Value to set for the isManagementRestricted property.
     */
    public set isManagementRestricted(value: boolean | undefined) {
        this._isManagementRestricted = value;
    };
    /**
     * Gets the isRooted property value. true if device is rooted; false if device is jail-broken. This can only be updated by Intune.
     * @returns a boolean
     */
    public get isRooted() {
        return this._isRooted;
    };
    /**
     * Sets the isRooted property value. true if device is rooted; false if device is jail-broken. This can only be updated by Intune.
     * @param value Value to set for the isRooted property.
     */
    public set isRooted(value: boolean | undefined) {
        this._isRooted = value;
    };
    /**
     * Gets the kind property value. Form factor of device. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Form factor of device. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the managementType property value. Management channel of the device.  This property is set by Intune. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController.
     * @returns a string
     */
    public get managementType() {
        return this._managementType;
    };
    /**
     * Sets the managementType property value. Management channel of the device.  This property is set by Intune. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController.
     * @param value Value to set for the managementType property.
     */
    public set managementType(value: string | undefined) {
        this._managementType = value;
    };
    /**
     * Gets the manufacturer property value. Manufacturer of the device. Read-only.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Manufacturer of the device. Read-only.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get mdmAppId() {
        return this._mdmAppId;
    };
    /**
     * Sets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the mdmAppId property.
     */
    public set mdmAppId(value: string | undefined) {
        this._mdmAppId = value;
    };
    /**
     * Gets the memberOf property value. Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the model property value. Model of the device. Read-only.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model of the device. Read-only.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the name property value. Friendly name of a device. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Friendly name of a device. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Gets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystemVersion() {
        return this._operatingSystemVersion;
    };
    /**
     * Sets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystemVersion property.
     */
    public set operatingSystemVersion(value: string | undefined) {
        this._operatingSystemVersion = value;
    };
    /**
     * Gets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, /$count eq 0, /$count ne 0.
     * @returns a string
     */
    public get physicalIds() {
        return this._physicalIds;
    };
    /**
     * Sets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, /$count eq 0, /$count ne 0.
     * @param value Value to set for the physicalIds property.
     */
    public set physicalIds(value: string[] | undefined) {
        this._physicalIds = value;
    };
    /**
     * Gets the platform property value. Platform of device. Only returned if user signs in with a Microsoft account as part of Project Rome. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @returns a string
     */
    public get platform() {
        return this._platform;
    };
    /**
     * Sets the platform property value. Platform of device. Only returned if user signs in with a Microsoft account as part of Project Rome. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @param value Value to set for the platform property.
     */
    public set platform(value: string | undefined) {
        this._platform = value;
    };
    /**
     * Gets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @returns a string
     */
    public get profileType() {
        return this._profileType;
    };
    /**
     * Sets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @param value Value to set for the profileType property.
     */
    public set profileType(value: string | undefined) {
        this._profileType = value;
    };
    /**
     * Gets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get registeredOwners() {
        return this._registeredOwners;
    };
    /**
     * Sets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredOwners property.
     */
    public set registeredOwners(value: DirectoryObject[] | undefined) {
        this._registeredOwners = value;
    };
    /**
     * Gets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get registeredUsers() {
        return this._registeredUsers;
    };
    /**
     * Sets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredUsers property.
     */
    public set registeredUsers(value: DirectoryObject[] | undefined) {
        this._registeredUsers = value;
    };
    /**
     * Gets the registrationDateTime property value. Date and time of when the device was registered. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get registrationDateTime() {
        return this._registrationDateTime;
    };
    /**
     * Sets the registrationDateTime property value. Date and time of when the device was registered. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the registrationDateTime property.
     */
    public set registrationDateTime(value: Date | undefined) {
        this._registrationDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues<AlternativeSecurityId>("alternativeSecurityIds", this.alternativeSecurityIds);
        writer.writeDateValue("approximateLastSignInDateTime", this.approximateLastSignInDateTime);
        writer.writeCollectionOfObjectValues<Command>("commands", this.commands);
        writer.writeDateValue("complianceExpirationDateTime", this.complianceExpirationDateTime);
        writer.writeStringValue("deviceCategory", this.deviceCategory);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceMetadata", this.deviceMetadata);
        writer.writeStringValue("deviceOwnership", this.deviceOwnership);
        writer.writeNumberValue("deviceVersion", this.deviceVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeStringValue("enrollmentProfileName", this.enrollmentProfileName);
        writer.writeStringValue("enrollmentType", this.enrollmentType);
        writer.writeObjectValue<OnPremisesExtensionAttributes>("extensionAttributes", this.extensionAttributes);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeCollectionOfPrimitiveValues<string>("hostnames", this.hostnames);
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        writer.writeBooleanValue("isManaged", this.isManaged);
        writer.writeBooleanValue("isManagementRestricted", this.isManagementRestricted);
        writer.writeBooleanValue("isRooted", this.isRooted);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("managementType", this.managementType);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("mdmAppId", this.mdmAppId);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("operatingSystemVersion", this.operatingSystemVersion);
        writer.writeCollectionOfPrimitiveValues<string>("physicalIds", this.physicalIds);
        writer.writeStringValue("platform", this.platform);
        writer.writeStringValue("profileType", this.profileType);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredOwners", this.registeredOwners);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredUsers", this.registeredUsers);
        writer.writeDateValue("registrationDateTime", this.registrationDateTime);
        writer.writeStringValue("status", this.status);
        writer.writeCollectionOfPrimitiveValues<string>("systemLabels", this.systemLabels);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeStringValue("trustType", this.trustType);
        writer.writeCollectionOfObjectValues<UsageRight>("usageRights", this.usageRights);
    };
    /**
     * Gets the status property value. Device is online or offline. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Device is online or offline. Only returned if user signs in with a Microsoft account as part of Project Rome.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the systemLabels property value. List of labels applied to the device by the system. Supports $filter (/$count eq 0, /$count ne 0).
     * @returns a string
     */
    public get systemLabels() {
        return this._systemLabels;
    };
    /**
     * Sets the systemLabels property value. List of labels applied to the device by the system. Supports $filter (/$count eq 0, /$count ne 0).
     * @param value Value to set for the systemLabels property.
     */
    public set systemLabels(value: string[] | undefined) {
        this._systemLabels = value;
    };
    /**
     * Gets the transitiveMemberOf property value. Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Gets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @returns a string
     */
    public get trustType() {
        return this._trustType;
    };
    /**
     * Sets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @param value Value to set for the trustType property.
     */
    public set trustType(value: string | undefined) {
        this._trustType = value;
    };
    /**
     * Gets the usageRights property value. Represents the usage rights a device has been granted.
     * @returns a usageRight
     */
    public get usageRights() {
        return this._usageRights;
    };
    /**
     * Sets the usageRights property value. Represents the usage rights a device has been granted.
     * @param value Value to set for the usageRights property.
     */
    public set usageRights(value: UsageRight[] | undefined) {
        this._usageRights = value;
    };
}
