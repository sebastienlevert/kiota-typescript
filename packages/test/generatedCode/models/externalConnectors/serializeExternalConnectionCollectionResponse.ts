import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalConnectionCollectionResponse} from './index';
import {serializeExternalConnection} from './serializeExternalConnection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalConnectionCollectionResponse(writer: SerializationWriter, externalConnectionCollectionResponse: ExternalConnectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalConnectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", externalConnectionCollectionResponse.value as any, serializeExternalConnection);
}
