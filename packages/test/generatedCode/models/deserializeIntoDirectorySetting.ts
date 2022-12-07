import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSettingValue} from './deserializeIntoSettingValue';
import {DirectorySetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectorySetting(directorySetting: DirectorySetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directorySetting),
        "displayName": n => { directorySetting.displayName = n.getStringValue() as any ; },
        "templateId": n => { directorySetting.templateId = n.getStringValue() as any ; },
        "values": n => { directorySetting.values = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingValue) as any ; },
    }
}
