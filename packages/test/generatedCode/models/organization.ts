import {AssignedPlan, CertificateBasedAuthConfiguration, DirectoryObject, Extension, OrganizationalBranding, PrivacyProfile, ProvisionedPlan, VerifiedDomain} from './index';
import {MdmAuthority} from './mdmAuthority';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Organization extends DirectoryObject, Partial<Parsable> {
    /** The collection of service plans associated with the tenant. Not nullable. */
    assignedPlans?: AssignedPlan[];
    /** Branding for the organization. Nullable. */
    branding?: OrganizationalBranding;
    /** Telephone number for the organization. Although this is a string collection, only one number can be set for this property. */
    businessPhones?: string[];
    /** Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection. */
    certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[];
    /** City name of the address for the organization. */
    city?: string;
    /** Country/region name of the address for the organization. */
    country?: string;
    /** Country or region abbreviation for the organization in ISO 3166-2 format. */
    countryLetterCode?: string;
    /** Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?: Date;
    /** The display name for the tenant. */
    displayName?: string;
    /** The collection of open extensions defined for the organization. Read-only. Nullable. */
    extensions?: Extension[];
    /** Not nullable. */
    marketingNotificationEmails?: string[];
    /** Mobile device management authority. */
    mobileDeviceManagementAuthority?: MdmAuthority;
    /** The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    onPremisesLastSyncDateTime?: Date;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced. Nullable. null if this object has never been synced from an on-premises directory (default). */
    onPremisesSyncEnabled?: boolean;
    /** Postal code of the address for the organization. */
    postalCode?: string;
    /** The preferred language for the organization. Should follow ISO 639-1 Code; for example, en. */
    preferredLanguage?: string;
    /** The privacy profile of an organization. */
    privacyProfile?: PrivacyProfile;
    /** Not nullable. */
    provisionedPlans?: ProvisionedPlan[];
    /** The securityComplianceNotificationMails property */
    securityComplianceNotificationMails?: string[];
    /** The securityComplianceNotificationPhones property */
    securityComplianceNotificationPhones?: string[];
    /** State name of the address for the organization. */
    state?: string;
    /** Street name of the address for organization. */
    street?: string;
    /** Not nullable. */
    technicalNotificationMails?: string[];
    /** The tenantType property */
    tenantType?: string;
    /** The collection of domains associated with this tenant. Not nullable. */
    verifiedDomains?: VerifiedDomain[];
}
