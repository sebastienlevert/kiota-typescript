import {SettingSource} from './index';
import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingSource(writer: SerializationWriter, settingSource: SettingSource | undefined = {}) : void {
            writer.writeStringValue("displayName", settingSource.displayName);
            writer.writeStringValue("id", settingSource.id);
            writer.writeEnumValue<SettingSourceType>("sourceType", settingSource.sourceType);
}
