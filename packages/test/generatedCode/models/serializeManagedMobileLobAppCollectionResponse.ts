import {ManagedMobileLobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedMobileLobApp} from './serializeManagedMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileLobAppCollectionResponse(writer: SerializationWriter, managedMobileLobAppCollectionResponse: ManagedMobileLobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedMobileLobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedMobileLobAppCollectionResponse.value as any, serializeManagedMobileLobApp);
}
