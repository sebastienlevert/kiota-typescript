import {UriClickSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUriClickSecurityState} from './serializeUriClickSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUriClickSecurityStateCollectionResponse(writer: SerializationWriter, uriClickSecurityStateCollectionResponse: UriClickSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, uriClickSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", uriClickSecurityStateCollectionResponse.value as any, serializeUriClickSecurityState);
}
