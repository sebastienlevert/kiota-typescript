import {IosDeviceFeaturesConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosDeviceFeaturesConfiguration} from './serializeIosDeviceFeaturesConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosDeviceFeaturesConfigurationCollectionResponse(writer: SerializationWriter, iosDeviceFeaturesConfigurationCollectionResponse: IosDeviceFeaturesConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosDeviceFeaturesConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosDeviceFeaturesConfigurationCollectionResponse.value as any, serializeIosDeviceFeaturesConfiguration);
}
