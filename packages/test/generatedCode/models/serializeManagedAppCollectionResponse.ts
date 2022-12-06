import {ManagedAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedApp} from './serializeManagedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppCollectionResponse(writer: SerializationWriter, managedAppCollectionResponse: ManagedAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppCollectionResponse.value as any, serializeManagedApp);
}
