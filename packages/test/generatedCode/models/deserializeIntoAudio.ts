import {Audio} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudio(audio: Audio | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "album": n => { audio.album = n.getStringValue() as any ; },
        "albumArtist": n => { audio.albumArtist = n.getStringValue() as any ; },
        "artist": n => { audio.artist = n.getStringValue() as any ; },
        "bitrate": n => { audio.bitrate = n.getNumberValue() as any ; },
        "composers": n => { audio.composers = n.getStringValue() as any ; },
        "copyright": n => { audio.copyright = n.getStringValue() as any ; },
        "disc": n => { audio.disc = n.getNumberValue() as any ; },
        "discCount": n => { audio.discCount = n.getNumberValue() as any ; },
        "duration": n => { audio.duration = n.getNumberValue() as any ; },
        "genre": n => { audio.genre = n.getStringValue() as any ; },
        "hasDrm": n => { audio.hasDrm = n.getBooleanValue() as any ; },
        "isVariableBitrate": n => { audio.isVariableBitrate = n.getBooleanValue() as any ; },
        "title": n => { audio.title = n.getStringValue() as any ; },
        "track": n => { audio.track = n.getNumberValue() as any ; },
        "trackCount": n => { audio.trackCount = n.getNumberValue() as any ; },
        "year": n => { audio.year = n.getNumberValue() as any ; },
    }
}
