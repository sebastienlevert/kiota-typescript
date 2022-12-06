import {ItemBody, KeyValuePair, TeamworkActivityTopic} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SendActivityNotificationPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The activityType property */
    activityType?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The chainId property */
    chainId?: number;
    /** The previewText property */
    previewText?: ItemBody;
    /** The templateParameters property */
    templateParameters?: KeyValuePair[];
    /** The topic property */
    topic?: TeamworkActivityTopic;
}
