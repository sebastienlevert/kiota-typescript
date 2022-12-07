import {TimeCardBreak, TimeCardEvent} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeCardEntry extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of breaks associated with the timeCard. */
    breaks?: TimeCardBreak[];
    /** The clockInEvent property */
    clockInEvent?: TimeCardEvent;
    /** The clockOutEvent property */
    clockOutEvent?: TimeCardEvent;
}
