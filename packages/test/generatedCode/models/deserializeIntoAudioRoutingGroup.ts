import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AudioRoutingGroup} from './index';
import {RoutingMode} from './routingMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioRoutingGroup(audioRoutingGroup: AudioRoutingGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(audioRoutingGroup),
        "receivers": n => { audioRoutingGroup.receivers = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "routingMode": n => { audioRoutingGroup.routingMode = n.getEnumValue<RoutingMode>(RoutingMode) as any ; },
        "sources": n => { audioRoutingGroup.sources = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
