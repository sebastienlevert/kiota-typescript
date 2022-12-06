import {PrintServiceEndpointCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintServiceEndpoint} from './serializePrintServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintServiceEndpointCollectionResponse(writer: SerializationWriter, printServiceEndpointCollectionResponse: PrintServiceEndpointCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printServiceEndpointCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printServiceEndpointCollectionResponse.value as any, serializePrintServiceEndpoint);
}
