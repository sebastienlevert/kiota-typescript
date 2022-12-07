import {Video} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVideo(video: Video | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audioBitsPerSample": n => { video.audioBitsPerSample = n.getNumberValue() as any ; },
        "audioChannels": n => { video.audioChannels = n.getNumberValue() as any ; },
        "audioFormat": n => { video.audioFormat = n.getStringValue() as any ; },
        "audioSamplesPerSecond": n => { video.audioSamplesPerSecond = n.getNumberValue() as any ; },
        "bitrate": n => { video.bitrate = n.getNumberValue() as any ; },
        "duration": n => { video.duration = n.getNumberValue() as any ; },
        "fourCC": n => { video.fourCC = n.getStringValue() as any ; },
        "frameRate": n => { video.frameRate = n.getNumberValue() as any ; },
        "height": n => { video.height = n.getNumberValue() as any ; },
        "width": n => { video.width = n.getNumberValue() as any ; },
    }
}
