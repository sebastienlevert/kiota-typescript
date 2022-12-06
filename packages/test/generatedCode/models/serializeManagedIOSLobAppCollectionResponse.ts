import {ManagedIOSLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedIOSLobApp} from './serializeManagedIOSLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSLobAppCollectionResponse(writer: SerializationWriter, managedIOSLobAppCollectionResponse: ManagedIOSLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedIOSLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedIOSLobAppCollectionResponse.value as any, serializeManagedIOSLobApp);
}
