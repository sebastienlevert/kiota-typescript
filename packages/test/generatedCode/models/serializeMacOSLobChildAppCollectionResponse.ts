import {MacOSLobChildAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSLobChildApp} from './serializeMacOSLobChildApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSLobChildAppCollectionResponse(writer: SerializationWriter, macOSLobChildAppCollectionResponse: MacOSLobChildAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSLobChildAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSLobChildAppCollectionResponse.value as any, serializeMacOSLobChildApp);
}
