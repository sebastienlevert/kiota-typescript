import {DateTimeTimeZone} from '../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetStaffAvailabilityPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?: DateTimeTimeZone;
    /** The staffIds property */
    staffIds?: string[];
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
}
