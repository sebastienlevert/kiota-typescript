import {serializeTimeSlot} from '../../../../models/serializeTimeSlot';
import {TentativelyAcceptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTentativelyAcceptPostRequestBody(writer: SerializationWriter, tentativelyAcceptPostRequestBody: TentativelyAcceptPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", tentativelyAcceptPostRequestBody.comment);
            writer.writeObjectValueFromMethod("proposedNewTime", tentativelyAcceptPostRequestBody.proposedNewTime as any, serializeTimeSlot);
            writer.writeBooleanValue("sendResponse", tentativelyAcceptPostRequestBody.sendResponse);
}
