import {MacOSGeneralDeviceConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSGeneralDeviceConfiguration} from './serializeMacOSGeneralDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSGeneralDeviceConfigurationCollectionResponse(writer: SerializationWriter, macOSGeneralDeviceConfigurationCollectionResponse: MacOSGeneralDeviceConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSGeneralDeviceConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSGeneralDeviceConfigurationCollectionResponse.value as any, serializeMacOSGeneralDeviceConfiguration);
}
