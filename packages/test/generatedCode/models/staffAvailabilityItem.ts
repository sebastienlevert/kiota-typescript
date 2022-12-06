import {AvailabilityItem} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StaffAvailabilityItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Each item in this collection indicates a slot and the status of the staff member. */
    availabilityItems?: AvailabilityItem[];
    /** The OdataType property */
    odataType?: string;
    /** The ID of the staff member. */
    staffId?: string;
}
