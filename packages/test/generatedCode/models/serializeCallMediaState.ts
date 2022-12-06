import {CallMediaState} from './index';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallMediaState(writer: SerializationWriter, callMediaState: CallMediaState | undefined = {}) : void {
            writer.writeEnumValue<MediaState>("audio", callMediaState.audio);
            writer.writeStringValue("@odata.type", callMediaState.odataType);
}
