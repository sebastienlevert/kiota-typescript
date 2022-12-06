import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {TokenMeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenMeetingInfo(tokenMeetingInfo: TokenMeetingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(tokenMeetingInfo),
        "token": n => { tokenMeetingInfo.token = n.getStringValue() as any ; },
    }
}
