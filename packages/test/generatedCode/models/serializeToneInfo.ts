import {ToneInfo} from './index';
import {Tone} from './tone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeToneInfo(writer: SerializationWriter, toneInfo: ToneInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", toneInfo.odataType);
            writer.writeNumberValue("sequenceId", toneInfo.sequenceId);
            writer.writeEnumValue<Tone>("tone", toneInfo.tone);
}
