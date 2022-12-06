import {Windows10GeneralConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10GeneralConfiguration} from './serializeWindows10GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10GeneralConfigurationCollectionResponse(writer: SerializationWriter, windows10GeneralConfigurationCollectionResponse: Windows10GeneralConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10GeneralConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10GeneralConfigurationCollectionResponse.value as any, serializeWindows10GeneralConfiguration);
}
