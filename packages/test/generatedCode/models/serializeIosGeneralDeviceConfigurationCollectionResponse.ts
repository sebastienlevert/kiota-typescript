import {IosGeneralDeviceConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosGeneralDeviceConfiguration} from './serializeIosGeneralDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosGeneralDeviceConfigurationCollectionResponse(writer: SerializationWriter, iosGeneralDeviceConfigurationCollectionResponse: IosGeneralDeviceConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosGeneralDeviceConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosGeneralDeviceConfigurationCollectionResponse.value as any, serializeIosGeneralDeviceConfiguration);
}
