import {serializeMessage} from '../../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../../models/serializeRecipient';
import {ForwardPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForwardPostRequestBody(writer: SerializationWriter, forwardPostRequestBody: ForwardPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", forwardPostRequestBody.comment);
            writer.writeObjectValueFromMethod("message", forwardPostRequestBody.message as any, serializeMessage);
            writer.writeCollectionOfObjectValuesFromMethod("toRecipients", forwardPostRequestBody.toRecipients as any, serializeRecipient);
}
