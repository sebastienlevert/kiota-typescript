import {WindowsUpdateForBusinessConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsUpdateForBusinessConfiguration} from './serializeWindowsUpdateForBusinessConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateForBusinessConfigurationCollectionResponse(writer: SerializationWriter, windowsUpdateForBusinessConfigurationCollectionResponse: WindowsUpdateForBusinessConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsUpdateForBusinessConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsUpdateForBusinessConfigurationCollectionResponse.value as any, serializeWindowsUpdateForBusinessConfiguration);
}
