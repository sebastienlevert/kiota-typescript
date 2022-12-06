import {MacOSCustomConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSCustomConfiguration} from './serializeMacOSCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSCustomConfigurationCollectionResponse(writer: SerializationWriter, macOSCustomConfigurationCollectionResponse: MacOSCustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSCustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSCustomConfigurationCollectionResponse.value as any, serializeMacOSCustomConfiguration);
}
