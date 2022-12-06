import {SharedPCConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedPCConfiguration} from './serializeSharedPCConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedPCConfigurationCollectionResponse(writer: SerializationWriter, sharedPCConfigurationCollectionResponse: SharedPCConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedPCConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharedPCConfigurationCollectionResponse.value as any, serializeSharedPCConfiguration);
}
