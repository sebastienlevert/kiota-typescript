import {EndpointCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEndpoint} from './serializeEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpointCollectionResponse(writer: SerializationWriter, endpointCollectionResponse: EndpointCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, endpointCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", endpointCollectionResponse.value as any, serializeEndpoint);
}
