import {Category, Tag} from './index';
import {Pet_status} from './pet_status';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Pet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The category property */
    category?: Category;
    /** The id property */
    id?: number;
    /** The name property */
    name?: string;
    /** The photoUrls property */
    photoUrls?: string[];
    /** pet status in the store */
    status?: Pet_status;
    /** The tags property */
    tags?: Tag[];
}
