import {serializeMessage} from '../../../../../../models/serializeMessage';
import {CreateReplyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateReplyPostRequestBody(writer: SerializationWriter, createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", createReplyPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", createReplyPostRequestBody.message as any, serializeMessage);
}
