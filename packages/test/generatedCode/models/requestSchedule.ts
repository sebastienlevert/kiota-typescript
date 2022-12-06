import {ExpirationPattern, PatternedRecurrence} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RequestSchedule extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** When the eligible or active assignment expires. */
    expiration?: ExpirationPattern;
    /** The OdataType property */
    odataType?: string;
    /** The frequency of the  eligible or active assignment. This property is currently unsupported in PIM. */
    recurrence?: PatternedRecurrence;
    /** When the  eligible or active assignment becomes active. */
    startDateTime?: Date;
}
