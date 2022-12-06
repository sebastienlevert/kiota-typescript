import {AlternativeSecurityId, DirectoryObject, Extension} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Device extends DirectoryObject, Partial<Parsable> {
    /** true if the account is enabled; otherwise, false. Required. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property. */
    accountEnabled?: boolean;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le). */
    alternativeSecurityIds?: AlternativeSecurityId[];
    /** The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy. */
    approximateLastSignInDateTime?: Date;
    /** The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    complianceExpirationDateTime?: Date;
    /** Unique identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith). */
    deviceId?: string;
    /** For internal use only. Set to null. */
    deviceMetadata?: string;
    /** For internal use only. */
    deviceVersion?: number;
    /** The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    displayName?: string;
    /** The collection of open extensions defined for the device. Read-only. Nullable. */
    extensions?: Extension[];
    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    isCompliant?: boolean;
    /** true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    isManaged?: boolean;
    /** Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith). */
    mdmAppId?: string;
    /** Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand. */
    memberOf?: DirectoryObject[];
    /** The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?: Date;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?: boolean;
    /** The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    operatingSystem?: string;
    /** The version of the operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    operatingSystemVersion?: string;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith,/$count eq 0, /$count ne 0). */
    physicalIds?: string[];
    /** The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT. */
    profileType?: string;
    /** The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand. */
    registeredOwners?: DirectoryObject[];
    /** Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand. */
    registeredUsers?: DirectoryObject[];
    /** List of labels applied to the device by the system. Supports $filter (/$count eq 0, /$count ne 0). */
    systemLabels?: string[];
    /** Groups and administrative units that the device is a member of. This operation is transitive. Supports $expand. */
    transitiveMemberOf?: DirectoryObject[];
    /** Type of trust for the joined device. Read-only. Possible values:  Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory */
    trustType?: string;
}
