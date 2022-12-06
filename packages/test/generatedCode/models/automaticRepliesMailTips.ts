import {DateTimeTimeZone, LocaleInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AutomaticRepliesMailTips extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The automatic reply message. */
    message?: string;
    /** The language that the automatic reply message is in. */
    messageLanguage?: LocaleInfo;
    /** The OdataType property */
    odataType?: string;
    /** The date and time that automatic replies are set to end. */
    scheduledEndTime?: DateTimeTimeZone;
    /** The date and time that automatic replies are set to begin. */
    scheduledStartTime?: DateTimeTimeZone;
}
