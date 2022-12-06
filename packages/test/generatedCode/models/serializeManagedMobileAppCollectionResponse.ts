import {ManagedMobileAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileAppCollectionResponse(writer: SerializationWriter, managedMobileAppCollectionResponse: ManagedMobileAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedMobileAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedMobileAppCollectionResponse.value as any, serializeManagedMobileApp);
}
