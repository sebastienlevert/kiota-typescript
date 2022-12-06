import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoSettingTemplateValue} from './deserializeIntoSettingTemplateValue';
import {GroupSettingTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplate(groupSettingTemplate: GroupSettingTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(groupSettingTemplate),
        "description": n => { groupSettingTemplate.description = n.getStringValue() as any ; },
        "displayName": n => { groupSettingTemplate.displayName = n.getStringValue() as any ; },
        "values": n => { groupSettingTemplate.values = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingTemplateValue) as any ; },
    }
}
