import {WindowsPhone81CustomConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsPhone81CustomConfiguration} from './serializeWindowsPhone81CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81CustomConfigurationCollectionResponse(writer: SerializationWriter, windowsPhone81CustomConfigurationCollectionResponse: WindowsPhone81CustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsPhone81CustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsPhone81CustomConfigurationCollectionResponse.value as any, serializeWindowsPhone81CustomConfiguration);
}
