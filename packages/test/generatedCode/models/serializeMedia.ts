import {Media} from './index';
import {serializeMediaSource} from './serializeMediaSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMedia(writer: SerializationWriter, media: Media | undefined = {}) : void {
            writer.writeBooleanValue("isTranscriptionShown", media.isTranscriptionShown);
            writer.writeObjectValueFromMethod("mediaSource", media.mediaSource as any, serializeMediaSource);
}
