import {SettingSource} from './index';
import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingSource(settingSource: SettingSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { settingSource.displayName = n.getStringValue() as any ; },
        "id": n => { settingSource.id = n.getStringValue() as any ; },
        "sourceType": n => { settingSource.sourceType = n.getEnumValue<SettingSourceType>(SettingSourceType) as any ; },
    }
}
