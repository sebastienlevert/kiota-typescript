import {serializeItemBody} from '../../../../models/serializeItemBody';
import {serializeKeyValuePair} from '../../../../models/serializeKeyValuePair';
import {serializeTeamworkActivityTopic} from '../../../../models/serializeTeamworkActivityTopic';
import {SendActivityNotificationPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSendActivityNotificationPostRequestBody(writer: SerializationWriter, sendActivityNotificationPostRequestBody: SendActivityNotificationPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("activityType", sendActivityNotificationPostRequestBody.activityType);
            writer.writeNumberValue("chainId", sendActivityNotificationPostRequestBody.chainId);
            writer.writeObjectValueFromMethod("previewText", sendActivityNotificationPostRequestBody.previewText as any, serializeItemBody);
            writer.writeCollectionOfObjectValuesFromMethod("templateParameters", sendActivityNotificationPostRequestBody.templateParameters as any, serializeKeyValuePair);
            writer.writeObjectValueFromMethod("topic", sendActivityNotificationPostRequestBody.topic as any, serializeTeamworkActivityTopic);
}
