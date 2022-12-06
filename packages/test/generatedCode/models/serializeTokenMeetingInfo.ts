import {TokenMeetingInfo} from './index';
import {serializeMeetingInfo} from './serializeMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenMeetingInfo(writer: SerializationWriter, tokenMeetingInfo: TokenMeetingInfo | undefined = {}) : void {
        serializeMeetingInfo(writer, tokenMeetingInfo)
            writer.writeStringValue("token", tokenMeetingInfo.token);
}
