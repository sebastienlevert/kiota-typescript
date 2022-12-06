import {ChannelCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChannel} from './serializeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelCollectionResponse(writer: SerializationWriter, channelCollectionResponse: ChannelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, channelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", channelCollectionResponse.value as any, serializeChannel);
}
