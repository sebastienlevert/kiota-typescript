import {CallRouteCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCallRoute} from './serializeCallRoute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRouteCollectionResponse(writer: SerializationWriter, callRouteCollectionResponse: CallRouteCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callRouteCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", callRouteCollectionResponse.value as any, serializeCallRoute);
}
