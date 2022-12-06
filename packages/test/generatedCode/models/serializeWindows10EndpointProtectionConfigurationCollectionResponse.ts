import {Windows10EndpointProtectionConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10EndpointProtectionConfiguration} from './serializeWindows10EndpointProtectionConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10EndpointProtectionConfigurationCollectionResponse(writer: SerializationWriter, windows10EndpointProtectionConfigurationCollectionResponse: Windows10EndpointProtectionConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10EndpointProtectionConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10EndpointProtectionConfigurationCollectionResponse.value as any, serializeWindows10EndpointProtectionConfiguration);
}
