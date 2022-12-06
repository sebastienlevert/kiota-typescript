import {serializeMessage} from '../../../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../../../models/serializeRecipient';
import {CreateForwardPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateForwardPostRequestBody(writer: SerializationWriter, createForwardPostRequestBody: CreateForwardPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", createForwardPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", createForwardPostRequestBody.message as any, serializeMessage);
            writer.writeCollectionOfObjectValuesFromMethod("toRecipients", createForwardPostRequestBody.toRecipients as any, serializeRecipient);
}
