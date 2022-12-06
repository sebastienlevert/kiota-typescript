import {IosMobileAppConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosMobileAppConfiguration} from './serializeIosMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppConfigurationCollectionResponse(writer: SerializationWriter, iosMobileAppConfigurationCollectionResponse: IosMobileAppConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosMobileAppConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosMobileAppConfigurationCollectionResponse.value as any, serializeIosMobileAppConfiguration);
}
