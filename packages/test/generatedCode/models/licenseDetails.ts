import {Entity, ServicePlanInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseDetails extends Entity, Partial<Parsable> {
    /** Information about the service plans assigned with the license. Read-only, Not nullable */
    servicePlans?: ServicePlanInfo[];
    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only */
    skuId?: string;
    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only */
    skuPartNumber?: string;
}
