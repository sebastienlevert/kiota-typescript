import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEditionUpgradeConfiguration} from './deserializeIntoEditionUpgradeConfiguration';
import {EditionUpgradeConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEditionUpgradeConfigurationCollectionResponse(editionUpgradeConfigurationCollectionResponse: EditionUpgradeConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(editionUpgradeConfigurationCollectionResponse),
        "value": n => { editionUpgradeConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEditionUpgradeConfiguration) as any ; },
    }
}
