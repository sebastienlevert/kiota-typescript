import {AppConfigurationSettingItemCollectionResponse} from './index';
import {serializeAppConfigurationSettingItem} from './serializeAppConfigurationSettingItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConfigurationSettingItemCollectionResponse(writer: SerializationWriter, appConfigurationSettingItemCollectionResponse: AppConfigurationSettingItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appConfigurationSettingItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appConfigurationSettingItemCollectionResponse.value as any, serializeAppConfigurationSettingItem);
}
