import {Windows10CustomConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10CustomConfiguration} from './serializeWindows10CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10CustomConfigurationCollectionResponse(writer: SerializationWriter, windows10CustomConfigurationCollectionResponse: Windows10CustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10CustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10CustomConfigurationCollectionResponse.value as any, serializeWindows10CustomConfiguration);
}
