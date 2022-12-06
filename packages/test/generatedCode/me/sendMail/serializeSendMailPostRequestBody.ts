import {serializeMessage} from '../../models/serializeMessage';
import {SendMailPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSendMailPostRequestBody(writer: SerializationWriter, sendMailPostRequestBody: SendMailPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("message", sendMailPostRequestBody.message as any, serializeMessage);
            writer.writeBooleanValue("saveToSentItems", sendMailPostRequestBody.saveToSentItems);
}
