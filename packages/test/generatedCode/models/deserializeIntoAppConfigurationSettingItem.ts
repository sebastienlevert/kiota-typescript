import {AppConfigurationSettingItem} from './index';
import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConfigurationSettingItem(appConfigurationSettingItem: AppConfigurationSettingItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appConfigKey": n => { appConfigurationSettingItem.appConfigKey = n.getStringValue() as any ; },
        "appConfigKeyType": n => { appConfigurationSettingItem.appConfigKeyType = n.getEnumValue<MdmAppConfigKeyType>(MdmAppConfigKeyType) as any ; },
        "appConfigKeyValue": n => { appConfigurationSettingItem.appConfigKeyValue = n.getStringValue() as any ; },
        "@odata.type": n => { appConfigurationSettingItem.odataType = n.getStringValue() as any ; },
    }
}
