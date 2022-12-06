import {serializeTimeSlot} from '../../../../models/serializeTimeSlot';
import {DeclinePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeclinePostRequestBody(writer: SerializationWriter, declinePostRequestBody: DeclinePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", declinePostRequestBody.comment);
            writer.writeObjectValueFromMethod("proposedNewTime", declinePostRequestBody.proposedNewTime as any, serializeTimeSlot);
            writer.writeBooleanValue("sendResponse", declinePostRequestBody.sendResponse);
}
