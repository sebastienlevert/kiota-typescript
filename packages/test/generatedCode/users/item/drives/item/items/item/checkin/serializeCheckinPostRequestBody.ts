import {CheckinPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckinPostRequestBody(writer: SerializationWriter, checkinPostRequestBody: CheckinPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("checkInAs", checkinPostRequestBody.checkInAs);
            writer.writeStringValue("comment", checkinPostRequestBody.comment);
}
