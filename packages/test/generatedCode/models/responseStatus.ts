import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResponseStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The response property */
    response?: ResponseType;
    /** The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    time?: Date;
}
