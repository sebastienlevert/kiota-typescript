import {deserializeIntoItemBody} from '../../../models/deserializeIntoItemBody';
import {deserializeIntoKeyValuePair} from '../../../models/deserializeIntoKeyValuePair';
import {deserializeIntoTeamworkActivityTopic} from '../../../models/deserializeIntoTeamworkActivityTopic';
import {deserializeIntoTeamworkNotificationRecipient} from '../../../models/deserializeIntoTeamworkNotificationRecipient';
import {SendActivityNotificationPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSendActivityNotificationPostRequestBody(sendActivityNotificationPostRequestBody: SendActivityNotificationPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activityType": n => { sendActivityNotificationPostRequestBody.activityType = n.getStringValue() as any ; },
        "chainId": n => { sendActivityNotificationPostRequestBody.chainId = n.getNumberValue() as any ; },
        "previewText": n => { sendActivityNotificationPostRequestBody.previewText = n.getObject(deserializeIntoItemBody) as any ; },
        "recipient": n => { sendActivityNotificationPostRequestBody.recipient = n.getObject(deserializeIntoTeamworkNotificationRecipient) as any ; },
        "templateParameters": n => { sendActivityNotificationPostRequestBody.templateParameters = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "topic": n => { sendActivityNotificationPostRequestBody.topic = n.getObject(deserializeIntoTeamworkActivityTopic) as any ; },
    }
}
