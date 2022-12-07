import {deserializeIntoMediaSource} from './deserializeIntoMediaSource';
import {Media} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMedia(media: Media | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isTranscriptionShown": n => { media.isTranscriptionShown = n.getBooleanValue() as any ; },
        "mediaSource": n => { media.mediaSource = n.getObject(deserializeIntoMediaSource) as any ; },
    }
}
