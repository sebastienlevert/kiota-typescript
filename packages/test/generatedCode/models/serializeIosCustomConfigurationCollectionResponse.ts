import {IosCustomConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosCustomConfiguration} from './serializeIosCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCustomConfigurationCollectionResponse(writer: SerializationWriter, iosCustomConfigurationCollectionResponse: IosCustomConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosCustomConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosCustomConfigurationCollectionResponse.value as any, serializeIosCustomConfiguration);
}
