import {deserializeIntoAppConfigurationSettingItem} from './deserializeIntoAppConfigurationSettingItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppConfigurationSettingItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConfigurationSettingItemCollectionResponse(appConfigurationSettingItemCollectionResponse: AppConfigurationSettingItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appConfigurationSettingItemCollectionResponse),
        "value": n => { appConfigurationSettingItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConfigurationSettingItem) as any ; },
    }
}
