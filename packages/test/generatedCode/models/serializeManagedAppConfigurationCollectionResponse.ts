import {ManagedAppConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppConfiguration} from './serializeManagedAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppConfigurationCollectionResponse(writer: SerializationWriter, managedAppConfigurationCollectionResponse: ManagedAppConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppConfigurationCollectionResponse.value as any, serializeManagedAppConfiguration);
}
