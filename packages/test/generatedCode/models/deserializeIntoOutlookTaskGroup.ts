import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOutlookTaskFolder} from './deserializeIntoOutlookTaskFolder';
import {OutlookTaskGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTaskGroup(outlookTaskGroup: OutlookTaskGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookTaskGroup),
        "changeKey": n => { outlookTaskGroup.changeKey = n.getStringValue() as any ; },
        "groupKey": n => { outlookTaskGroup.groupKey = n.getStringValue() as any ; },
        "isDefaultGroup": n => { outlookTaskGroup.isDefaultGroup = n.getBooleanValue() as any ; },
        "name": n => { outlookTaskGroup.name = n.getStringValue() as any ; },
        "taskFolders": n => { outlookTaskGroup.taskFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTaskFolder) as any ; },
    }
}
