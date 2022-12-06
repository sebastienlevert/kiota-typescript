import {AndroidCustomConfigurationCollectionResponse} from './index';
import {serializeAndroidCustomConfiguration} from './serializeAndroidCustomConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCustomConfigurationCollectionResponse(writer: SerializationWriter, androidCustomConfigurationCollectionResponse: AndroidCustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidCustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidCustomConfigurationCollectionResponse.value as any, serializeAndroidCustomConfiguration);
}
