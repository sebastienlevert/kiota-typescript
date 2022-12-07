import {ItemBody, TimeCardEvent} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeCardBreak extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** ID of the timeCardBreak. */
    breakId?: string;
    /** The end property */
    end?: TimeCardEvent;
    /** The notes property */
    notes?: ItemBody;
    /** The start property */
    start?: TimeCardEvent;
}
