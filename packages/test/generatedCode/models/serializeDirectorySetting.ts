import {DirectorySetting} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSettingValue} from './serializeSettingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectorySetting(writer: SerializationWriter, directorySetting: DirectorySetting | undefined = {}) : void {
        serializeEntity(writer, directorySetting)
            writer.writeStringValue("displayName", directorySetting.displayName);
            writer.writeStringValue("templateId", directorySetting.templateId);
            writer.writeCollectionOfObjectValuesFromMethod("values", directorySetting.values as any, serializeSettingValue);
}
