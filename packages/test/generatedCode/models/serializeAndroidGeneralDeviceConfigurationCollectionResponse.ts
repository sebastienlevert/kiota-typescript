import {AndroidGeneralDeviceConfigurationCollectionResponse} from './index';
import {serializeAndroidGeneralDeviceConfiguration} from './serializeAndroidGeneralDeviceConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidGeneralDeviceConfigurationCollectionResponse(writer: SerializationWriter, androidGeneralDeviceConfigurationCollectionResponse: AndroidGeneralDeviceConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidGeneralDeviceConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidGeneralDeviceConfigurationCollectionResponse.value as any, serializeAndroidGeneralDeviceConfiguration);
}
