import {ManagedAndroidLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAndroidLobApp} from './serializeManagedAndroidLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidLobAppCollectionResponse(writer: SerializationWriter, managedAndroidLobAppCollectionResponse: ManagedAndroidLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAndroidLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAndroidLobAppCollectionResponse.value as any, serializeManagedAndroidLobApp);
}
