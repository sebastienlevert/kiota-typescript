import {IosUpdateConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosUpdateConfiguration} from './serializeIosUpdateConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateConfigurationCollectionResponse(writer: SerializationWriter, iosUpdateConfigurationCollectionResponse: IosUpdateConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosUpdateConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosUpdateConfigurationCollectionResponse.value as any, serializeIosUpdateConfiguration);
}
