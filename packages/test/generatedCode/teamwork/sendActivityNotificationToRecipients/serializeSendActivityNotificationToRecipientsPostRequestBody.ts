import {serializeItemBody} from '../../models/serializeItemBody';
import {serializeKeyValuePair} from '../../models/serializeKeyValuePair';
import {serializeTeamworkActivityTopic} from '../../models/serializeTeamworkActivityTopic';
import {serializeTeamworkNotificationRecipient} from '../../models/serializeTeamworkNotificationRecipient';
import {SendActivityNotificationToRecipientsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSendActivityNotificationToRecipientsPostRequestBody(writer: SerializationWriter, sendActivityNotificationToRecipientsPostRequestBody: SendActivityNotificationToRecipientsPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("activityType", sendActivityNotificationToRecipientsPostRequestBody.activityType);
            writer.writeNumberValue("chainId", sendActivityNotificationToRecipientsPostRequestBody.chainId);
            writer.writeObjectValueFromMethod("previewText", sendActivityNotificationToRecipientsPostRequestBody.previewText as any, serializeItemBody);
            writer.writeCollectionOfObjectValuesFromMethod("recipients", sendActivityNotificationToRecipientsPostRequestBody.recipients as any, serializeTeamworkNotificationRecipient);
            writer.writeStringValue("teamsAppId", sendActivityNotificationToRecipientsPostRequestBody.teamsAppId);
            writer.writeCollectionOfObjectValuesFromMethod("templateParameters", sendActivityNotificationToRecipientsPostRequestBody.templateParameters as any, serializeKeyValuePair);
            writer.writeObjectValueFromMethod("topic", sendActivityNotificationToRecipientsPostRequestBody.topic as any, serializeTeamworkActivityTopic);
}
