import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleEntity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** The startDateTime property */
    startDateTime?: Date;
    /** The theme property */
    theme?: ScheduleEntityTheme;
}
