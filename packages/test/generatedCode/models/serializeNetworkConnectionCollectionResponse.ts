import {NetworkConnectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNetworkConnection} from './serializeNetworkConnection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNetworkConnectionCollectionResponse(writer: SerializationWriter, networkConnectionCollectionResponse: NetworkConnectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, networkConnectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", networkConnectionCollectionResponse.value as any, serializeNetworkConnection);
}
