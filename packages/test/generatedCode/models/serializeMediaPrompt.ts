import {MediaPrompt} from './index';
import {serializeMediaInfo} from './serializeMediaInfo';
import {serializePrompt} from './serializePrompt';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaPrompt(writer: SerializationWriter, mediaPrompt: MediaPrompt | undefined = {}) : void {
        serializePrompt(writer, mediaPrompt)
            writer.writeObjectValueFromMethod("mediaInfo", mediaPrompt.mediaInfo as any, serializeMediaInfo);
}
