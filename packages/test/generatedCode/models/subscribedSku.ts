import {Entity, LicenseUnitsDetail, ServicePlanInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscribedSku extends Entity, Partial<Parsable> {
    /** For example, 'User' or 'Company'. */
    appliesTo?: string;
    /** Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription. */
    capabilityStatus?: string;
    /** The number of licenses that have been assigned. */
    consumedUnits?: number;
    /** Information about the number and status of prepaid licenses. */
    prepaidUnits?: LicenseUnitsDetail;
    /** Information about the service plans that are available with the SKU. Not nullable */
    servicePlans?: ServicePlanInfo[];
    /** The unique identifier (GUID) for the service SKU. */
    skuId?: string;
    /** The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus. */
    skuPartNumber?: string;
}
