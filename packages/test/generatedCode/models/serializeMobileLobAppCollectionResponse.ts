import {MobileLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileLobAppCollectionResponse(writer: SerializationWriter, mobileLobAppCollectionResponse: MobileLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileLobAppCollectionResponse.value as any, serializeMobileLobApp);
}
