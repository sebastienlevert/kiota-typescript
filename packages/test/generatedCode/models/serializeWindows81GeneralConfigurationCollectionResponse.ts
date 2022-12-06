import {Windows81GeneralConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows81GeneralConfiguration} from './serializeWindows81GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows81GeneralConfigurationCollectionResponse(writer: SerializationWriter, windows81GeneralConfigurationCollectionResponse: Windows81GeneralConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows81GeneralConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows81GeneralConfigurationCollectionResponse.value as any, serializeWindows81GeneralConfiguration);
}
