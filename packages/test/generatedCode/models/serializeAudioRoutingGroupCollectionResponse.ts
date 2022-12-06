import {AudioRoutingGroupCollectionResponse} from './index';
import {serializeAudioRoutingGroup} from './serializeAudioRoutingGroup';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudioRoutingGroupCollectionResponse(writer: SerializationWriter, audioRoutingGroupCollectionResponse: AudioRoutingGroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, audioRoutingGroupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", audioRoutingGroupCollectionResponse.value as any, serializeAudioRoutingGroup);
}
