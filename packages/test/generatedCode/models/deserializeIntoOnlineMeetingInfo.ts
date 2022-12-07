import {deserializeIntoPhone} from './deserializeIntoPhone';
import {OnlineMeetingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingInfo(onlineMeetingInfo: OnlineMeetingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "conferenceId": n => { onlineMeetingInfo.conferenceId = n.getStringValue() as any ; },
        "joinUrl": n => { onlineMeetingInfo.joinUrl = n.getStringValue() as any ; },
        "phones": n => { onlineMeetingInfo.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
        "quickDial": n => { onlineMeetingInfo.quickDial = n.getStringValue() as any ; },
        "tollFreeNumbers": n => { onlineMeetingInfo.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tollNumber": n => { onlineMeetingInfo.tollNumber = n.getStringValue() as any ; },
    }
}
