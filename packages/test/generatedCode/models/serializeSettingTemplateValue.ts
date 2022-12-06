import {SettingTemplateValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingTemplateValue(writer: SerializationWriter, settingTemplateValue: SettingTemplateValue | undefined = {}) : void {
            writer.writeStringValue("defaultValue", settingTemplateValue.defaultValue);
            writer.writeStringValue("description", settingTemplateValue.description);
            writer.writeStringValue("name", settingTemplateValue.name);
            writer.writeStringValue("@odata.type", settingTemplateValue.odataType);
            writer.writeStringValue("type", settingTemplateValue.type);
}
