import {ToneInfo} from './index';
import {Tone} from './tone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoToneInfo(toneInfo: ToneInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { toneInfo.odataType = n.getStringValue() as any ; },
        "sequenceId": n => { toneInfo.sequenceId = n.getNumberValue() as any ; },
        "tone": n => { toneInfo.tone = n.getEnumValue<Tone>(Tone) as any ; },
    }
}
