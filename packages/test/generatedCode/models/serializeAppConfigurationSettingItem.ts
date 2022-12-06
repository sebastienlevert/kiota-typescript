import {AppConfigurationSettingItem} from './index';
import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConfigurationSettingItem(writer: SerializationWriter, appConfigurationSettingItem: AppConfigurationSettingItem | undefined = {}) : void {
            writer.writeStringValue("appConfigKey", appConfigurationSettingItem.appConfigKey);
            writer.writeEnumValue<MdmAppConfigKeyType>("appConfigKeyType", appConfigurationSettingItem.appConfigKeyType);
            writer.writeStringValue("appConfigKeyValue", appConfigurationSettingItem.appConfigKeyValue);
            writer.writeStringValue("@odata.type", appConfigurationSettingItem.odataType);
}
