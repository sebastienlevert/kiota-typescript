import {MacOSLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSLobApp} from './serializeMacOSLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSLobAppCollectionResponse(writer: SerializationWriter, macOSLobAppCollectionResponse: MacOSLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSLobAppCollectionResponse.value as any, serializeMacOSLobApp);
}
