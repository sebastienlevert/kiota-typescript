import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookTask} from './deserializeIntoOutlookTask';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {OutlookTaskFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTaskFolder(outlookTaskFolder: OutlookTaskFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookTaskFolder),
        "changeKey": n => { outlookTaskFolder.changeKey = n.getStringValue() as any ; },
        "isDefaultFolder": n => { outlookTaskFolder.isDefaultFolder = n.getBooleanValue() as any ; },
        "multiValueExtendedProperties": n => { outlookTaskFolder.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "name": n => { outlookTaskFolder.name = n.getStringValue() as any ; },
        "parentGroupKey": n => { outlookTaskFolder.parentGroupKey = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { outlookTaskFolder.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "tasks": n => { outlookTaskFolder.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTask) as any ; },
    }
}
