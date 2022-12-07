import {OnlineMeetingInfo} from './index';
import {serializePhone} from './serializePhone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeetingInfo(writer: SerializationWriter, onlineMeetingInfo: OnlineMeetingInfo | undefined = {}) : void {
            writer.writeStringValue("conferenceId", onlineMeetingInfo.conferenceId);
            writer.writeStringValue("joinUrl", onlineMeetingInfo.joinUrl);
            writer.writeCollectionOfObjectValuesFromMethod("phones", onlineMeetingInfo.phones as any, serializePhone);
            writer.writeStringValue("quickDial", onlineMeetingInfo.quickDial);
            writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", onlineMeetingInfo.tollFreeNumbers);
            writer.writeStringValue("tollNumber", onlineMeetingInfo.tollNumber);
}
