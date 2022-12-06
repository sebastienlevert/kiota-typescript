import {MediaStream} from './index';
import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaStream(mediaStream: MediaStream | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "direction": n => { mediaStream.direction = n.getEnumValue<MediaDirection>(MediaDirection) as any ; },
        "label": n => { mediaStream.label = n.getStringValue() as any ; },
        "mediaType": n => { mediaStream.mediaType = n.getEnumValue<Modality>(Modality) as any ; },
        "@odata.type": n => { mediaStream.odataType = n.getStringValue() as any ; },
        "serverMuted": n => { mediaStream.serverMuted = n.getBooleanValue() as any ; },
        "sourceId": n => { mediaStream.sourceId = n.getStringValue() as any ; },
    }
}
