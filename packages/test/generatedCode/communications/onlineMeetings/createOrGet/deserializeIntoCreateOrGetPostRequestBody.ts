import {deserializeIntoChatInfo} from '../../../models/deserializeIntoChatInfo';
import {deserializeIntoMeetingParticipants} from '../../../models/deserializeIntoMeetingParticipants';
import {CreateOrGetPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateOrGetPostRequestBody(createOrGetPostRequestBody: CreateOrGetPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "chatInfo": n => { createOrGetPostRequestBody.chatInfo = n.getObject(deserializeIntoChatInfo) as any ; },
        "endDateTime": n => { createOrGetPostRequestBody.endDateTime = n.getDateValue() as any ; },
        "externalId": n => { createOrGetPostRequestBody.externalId = n.getStringValue() as any ; },
        "participants": n => { createOrGetPostRequestBody.participants = n.getObject(deserializeIntoMeetingParticipants) as any ; },
        "startDateTime": n => { createOrGetPostRequestBody.startDateTime = n.getDateValue() as any ; },
        "subject": n => { createOrGetPostRequestBody.subject = n.getStringValue() as any ; },
    }
}
