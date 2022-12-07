import {RecurrencePattern, RecurrenceRange} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PatternedRecurrence extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The pattern property */
    pattern?: RecurrencePattern;
    /** The range property */
    range?: RecurrenceRange;
}