import {serializeMessage} from '../../../../../../../../../models/serializeMessage';
import {CreateReplyAllPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateReplyAllPostRequestBody(writer: SerializationWriter, createReplyAllPostRequestBody: CreateReplyAllPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", createReplyAllPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", createReplyAllPostRequestBody.message as any, serializeMessage);
}
