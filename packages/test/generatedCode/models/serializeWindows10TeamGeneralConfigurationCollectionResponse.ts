import {Windows10TeamGeneralConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10TeamGeneralConfiguration} from './serializeWindows10TeamGeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10TeamGeneralConfigurationCollectionResponse(writer: SerializationWriter, windows10TeamGeneralConfigurationCollectionResponse: Windows10TeamGeneralConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10TeamGeneralConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10TeamGeneralConfigurationCollectionResponse.value as any, serializeWindows10TeamGeneralConfiguration);
}
