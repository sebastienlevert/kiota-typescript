import {deserializeIntoAudioRoutingGroup} from './deserializeIntoAudioRoutingGroup';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AudioRoutingGroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioRoutingGroupCollectionResponse(audioRoutingGroupCollectionResponse: AudioRoutingGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(audioRoutingGroupCollectionResponse),
        "value": n => { audioRoutingGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAudioRoutingGroup) as any ; },
    }
}
