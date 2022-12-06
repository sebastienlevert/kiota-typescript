import {IosManagedAppRegistrationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosManagedAppRegistration} from './serializeIosManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppRegistrationCollectionResponse(writer: SerializationWriter, iosManagedAppRegistrationCollectionResponse: IosManagedAppRegistrationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosManagedAppRegistrationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosManagedAppRegistrationCollectionResponse.value as any, serializeIosManagedAppRegistration);
}
