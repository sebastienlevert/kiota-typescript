import {WindowsPhone81GeneralConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsPhone81GeneralConfiguration} from './serializeWindowsPhone81GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81GeneralConfigurationCollectionResponse(writer: SerializationWriter, windowsPhone81GeneralConfigurationCollectionResponse: WindowsPhone81GeneralConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsPhone81GeneralConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsPhone81GeneralConfigurationCollectionResponse.value as any, serializeWindowsPhone81GeneralConfiguration);
}
