import {SettingTemplateValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingTemplateValue(settingTemplateValue: SettingTemplateValue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultValue": n => { settingTemplateValue.defaultValue = n.getStringValue() as any ; },
        "description": n => { settingTemplateValue.description = n.getStringValue() as any ; },
        "name": n => { settingTemplateValue.name = n.getStringValue() as any ; },
        "@odata.type": n => { settingTemplateValue.odataType = n.getStringValue() as any ; },
        "type": n => { settingTemplateValue.type = n.getStringValue() as any ; },
    }
}
