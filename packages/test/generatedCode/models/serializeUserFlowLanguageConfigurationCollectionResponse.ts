import {UserFlowLanguageConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguageConfigurationCollectionResponse(writer: SerializationWriter, userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguageConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userFlowLanguageConfigurationCollectionResponse.value as any, serializeUserFlowLanguageConfiguration);
}
