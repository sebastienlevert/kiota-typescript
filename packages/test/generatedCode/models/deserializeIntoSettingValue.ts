import {SettingValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingValue(settingValue: SettingValue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { settingValue.name = n.getStringValue() as any ; },
        "value": n => { settingValue.value = n.getStringValue() as any ; },
    }
}
