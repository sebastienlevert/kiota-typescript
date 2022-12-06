import {ServiceUpdateMessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessageCollectionResponse(writer: SerializationWriter, serviceUpdateMessageCollectionResponse: ServiceUpdateMessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceUpdateMessageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", serviceUpdateMessageCollectionResponse.value as any, serializeServiceUpdateMessage);
}
