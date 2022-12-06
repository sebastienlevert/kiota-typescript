import {CallMediaState} from './index';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallMediaState(callMediaState: CallMediaState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audio": n => { callMediaState.audio = n.getEnumValue<MediaState>(MediaState) as any ; },
        "@odata.type": n => { callMediaState.odataType = n.getStringValue() as any ; },
    }
}
