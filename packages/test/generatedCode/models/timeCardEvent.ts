import {ItemBody} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeCardEvent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether the entry was recorded at the approved location. */
    atApprovedLocation?: boolean;
    /** The time the entry is recorded. */
    dateTime?: Date;
    /** The notes property */
    notes?: ItemBody;
}
