import {GroupSetting} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSettingValue} from './serializeSettingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSetting(writer: SerializationWriter, groupSetting: GroupSetting | undefined = {}) : void {
        serializeEntity(writer, groupSetting)
            writer.writeStringValue("displayName", groupSetting.displayName);
            writer.writeStringValue("templateId", groupSetting.templateId);
            writer.writeCollectionOfObjectValuesFromMethod("values", groupSetting.values as any, serializeSettingValue);
}
