import {CallTranscriptionState} from './callTranscriptionState';
import {CallTranscriptionInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallTranscriptionInfo(callTranscriptionInfo: CallTranscriptionInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastModifiedDateTime": n => { callTranscriptionInfo.lastModifiedDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { callTranscriptionInfo.odataType = n.getStringValue() as any ; },
        "state": n => { callTranscriptionInfo.state = n.getEnumValue<CallTranscriptionState>(CallTranscriptionState) as any ; },
    }
}
