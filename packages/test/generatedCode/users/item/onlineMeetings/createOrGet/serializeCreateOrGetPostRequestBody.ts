import {serializeChatInfo} from '../../../../models/serializeChatInfo';
import {serializeMeetingParticipants} from '../../../../models/serializeMeetingParticipants';
import {CreateOrGetPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateOrGetPostRequestBody(writer: SerializationWriter, createOrGetPostRequestBody: CreateOrGetPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("chatInfo", createOrGetPostRequestBody.chatInfo as any, serializeChatInfo);
            writer.writeDateValue("endDateTime", createOrGetPostRequestBody.endDateTime);
            writer.writeStringValue("externalId", createOrGetPostRequestBody.externalId);
            writer.writeObjectValueFromMethod("participants", createOrGetPostRequestBody.participants as any, serializeMeetingParticipants);
            writer.writeDateValue("startDateTime", createOrGetPostRequestBody.startDateTime);
            writer.writeStringValue("subject", createOrGetPostRequestBody.subject);
}
