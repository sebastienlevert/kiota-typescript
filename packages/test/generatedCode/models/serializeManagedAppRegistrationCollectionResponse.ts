import {ManagedAppRegistrationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppRegistrationCollectionResponse(writer: SerializationWriter, managedAppRegistrationCollectionResponse: ManagedAppRegistrationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppRegistrationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppRegistrationCollectionResponse.value as any, serializeManagedAppRegistration);
}
