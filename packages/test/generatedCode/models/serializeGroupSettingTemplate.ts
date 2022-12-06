import {GroupSettingTemplate} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeSettingTemplateValue} from './serializeSettingTemplateValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingTemplate(writer: SerializationWriter, groupSettingTemplate: GroupSettingTemplate | undefined = {}) : void {
        serializeDirectoryObject(writer, groupSettingTemplate)
            writer.writeStringValue("description", groupSettingTemplate.description);
            writer.writeStringValue("displayName", groupSettingTemplate.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("values", groupSettingTemplate.values as any, serializeSettingTemplateValue);
}
