import {ManagedAndroidStoreAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAndroidStoreApp} from './serializeManagedAndroidStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidStoreAppCollectionResponse(writer: SerializationWriter, managedAndroidStoreAppCollectionResponse: ManagedAndroidStoreAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAndroidStoreAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAndroidStoreAppCollectionResponse.value as any, serializeManagedAndroidStoreApp);
}
