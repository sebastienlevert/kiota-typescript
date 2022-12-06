import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChannel} from './deserializeIntoChannel';
import {ChannelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelCollectionResponse(channelCollectionResponse: ChannelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(channelCollectionResponse),
        "value": n => { channelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChannel) as any ; },
    }
}
