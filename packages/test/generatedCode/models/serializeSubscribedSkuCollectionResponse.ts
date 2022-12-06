import {SubscribedSkuCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubscribedSku} from './serializeSubscribedSku';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribedSkuCollectionResponse(writer: SerializationWriter, subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscribedSkuCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subscribedSkuCollectionResponse.value as any, serializeSubscribedSku);
}
