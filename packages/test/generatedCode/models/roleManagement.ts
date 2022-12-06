import {RbacApplication} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RoleManagement extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The directory property */
    directory?: RbacApplication;
    /** Container for roles and assignments for entitlement management resources. */
    entitlementManagement?: RbacApplication;
    /** The OdataType property */
    odataType?: string;
}
