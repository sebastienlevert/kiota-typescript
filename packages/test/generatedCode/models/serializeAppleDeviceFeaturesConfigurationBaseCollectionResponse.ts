import {AppleDeviceFeaturesConfigurationBaseCollectionResponse} from './index';
import {serializeAppleDeviceFeaturesConfigurationBase} from './serializeAppleDeviceFeaturesConfigurationBase';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleDeviceFeaturesConfigurationBaseCollectionResponse(writer: SerializationWriter, appleDeviceFeaturesConfigurationBaseCollectionResponse: AppleDeviceFeaturesConfigurationBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appleDeviceFeaturesConfigurationBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appleDeviceFeaturesConfigurationBaseCollectionResponse.value as any, serializeAppleDeviceFeaturesConfigurationBase);
}
