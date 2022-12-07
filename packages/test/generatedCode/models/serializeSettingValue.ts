import {SettingValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingValue(writer: SerializationWriter, settingValue: SettingValue | undefined = {}) : void {
            writer.writeStringValue("name", settingValue.name);
            writer.writeStringValue("value", settingValue.value);
}
