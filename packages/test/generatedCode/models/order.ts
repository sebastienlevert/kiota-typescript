import {Order_status} from './order_status';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Order extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The complete property */
    complete?: boolean;
    /** The id property */
    id?: number;
    /** The petId property */
    petId?: number;
    /** The quantity property */
    quantity?: number;
    /** The shipDate property */
    shipDate?: Date;
    /** Order Status */
    status?: Order_status;
}
