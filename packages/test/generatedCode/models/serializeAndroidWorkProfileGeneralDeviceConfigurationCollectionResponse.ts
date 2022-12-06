import {AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse} from './index';
import {serializeAndroidWorkProfileGeneralDeviceConfiguration} from './serializeAndroidWorkProfileGeneralDeviceConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileGeneralDeviceConfigurationCollectionResponse(writer: SerializationWriter, androidWorkProfileGeneralDeviceConfigurationCollectionResponse: AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidWorkProfileGeneralDeviceConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidWorkProfileGeneralDeviceConfigurationCollectionResponse.value as any, serializeAndroidWorkProfileGeneralDeviceConfiguration);
}
