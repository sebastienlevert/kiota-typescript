import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSettingValue} from './deserializeIntoSettingValue';
import {GroupSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSetting(groupSetting: GroupSetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(groupSetting),
        "displayName": n => { groupSetting.displayName = n.getStringValue() as any ; },
        "templateId": n => { groupSetting.templateId = n.getStringValue() as any ; },
        "values": n => { groupSetting.values = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingValue) as any ; },
    }
}
