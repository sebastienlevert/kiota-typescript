import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkActivityTopic extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text. */
    source?: TeamworkActivityTopicSource;
    /** The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value. */
    value?: string;
    /** The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text. */
    webUrl?: string;
}
