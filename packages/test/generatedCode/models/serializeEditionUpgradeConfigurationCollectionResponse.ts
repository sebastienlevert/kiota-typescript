import {EditionUpgradeConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEditionUpgradeConfiguration} from './serializeEditionUpgradeConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEditionUpgradeConfigurationCollectionResponse(writer: SerializationWriter, editionUpgradeConfigurationCollectionResponse: EditionUpgradeConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, editionUpgradeConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", editionUpgradeConfigurationCollectionResponse.value as any, serializeEditionUpgradeConfiguration);
}
