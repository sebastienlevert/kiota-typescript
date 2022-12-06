import {deserializeIntoItemBody} from '../../models/deserializeIntoItemBody';
import {deserializeIntoKeyValuePair} from '../../models/deserializeIntoKeyValuePair';
import {deserializeIntoTeamworkActivityTopic} from '../../models/deserializeIntoTeamworkActivityTopic';
import {deserializeIntoTeamworkNotificationRecipient} from '../../models/deserializeIntoTeamworkNotificationRecipient';
import {SendActivityNotificationToRecipientsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSendActivityNotificationToRecipientsPostRequestBody(sendActivityNotificationToRecipientsPostRequestBody: SendActivityNotificationToRecipientsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activityType": n => { sendActivityNotificationToRecipientsPostRequestBody.activityType = n.getStringValue() as any ; },
        "chainId": n => { sendActivityNotificationToRecipientsPostRequestBody.chainId = n.getNumberValue() as any ; },
        "previewText": n => { sendActivityNotificationToRecipientsPostRequestBody.previewText = n.getObject(deserializeIntoItemBody) as any ; },
        "recipients": n => { sendActivityNotificationToRecipientsPostRequestBody.recipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkNotificationRecipient) as any ; },
        "teamsAppId": n => { sendActivityNotificationToRecipientsPostRequestBody.teamsAppId = n.getStringValue() as any ; },
        "templateParameters": n => { sendActivityNotificationToRecipientsPostRequestBody.templateParameters = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "topic": n => { sendActivityNotificationToRecipientsPostRequestBody.topic = n.getObject(deserializeIntoTeamworkActivityTopic) as any ; },
    }
}
