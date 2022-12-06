import {ManagedIOSStoreAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedIOSStoreApp} from './serializeManagedIOSStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSStoreAppCollectionResponse(writer: SerializationWriter, managedIOSStoreAppCollectionResponse: ManagedIOSStoreAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedIOSStoreAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedIOSStoreAppCollectionResponse.value as any, serializeManagedIOSStoreApp);
}
