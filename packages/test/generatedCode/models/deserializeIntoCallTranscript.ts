import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CallTranscript} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallTranscript(callTranscript: CallTranscript | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(callTranscript),
        "content": n => { callTranscript.content = n.getStringValue() as any ; },
        "createdDateTime": n => { callTranscript.createdDateTime = n.getDateValue() as any ; },
    }
}
