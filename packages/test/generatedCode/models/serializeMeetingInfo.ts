import {MeetingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingInfo(writer: SerializationWriter, meetingInfo: MeetingInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", meetingInfo.odataType);
}
