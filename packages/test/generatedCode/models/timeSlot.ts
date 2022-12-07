import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeSlot extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The end property */
    end?: DateTimeTimeZone;
    /** The start property */
    start?: DateTimeTimeZone;
}
