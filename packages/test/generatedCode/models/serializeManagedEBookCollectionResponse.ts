import {ManagedEBookCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBook} from './serializeManagedEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookCollectionResponse(writer: SerializationWriter, managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedEBookCollectionResponse.value as any, serializeManagedEBook);
}
