import {MacOSDeviceFeaturesConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSDeviceFeaturesConfiguration} from './serializeMacOSDeviceFeaturesConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSDeviceFeaturesConfigurationCollectionResponse(writer: SerializationWriter, macOSDeviceFeaturesConfigurationCollectionResponse: MacOSDeviceFeaturesConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSDeviceFeaturesConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSDeviceFeaturesConfigurationCollectionResponse.value as any, serializeMacOSDeviceFeaturesConfiguration);
}
