import {AndroidWorkProfileCustomConfigurationCollectionResponse} from './index';
import {serializeAndroidWorkProfileCustomConfiguration} from './serializeAndroidWorkProfileCustomConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileCustomConfigurationCollectionResponse(writer: SerializationWriter, androidWorkProfileCustomConfigurationCollectionResponse: AndroidWorkProfileCustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidWorkProfileCustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidWorkProfileCustomConfigurationCollectionResponse.value as any, serializeAndroidWorkProfileCustomConfiguration);
}
