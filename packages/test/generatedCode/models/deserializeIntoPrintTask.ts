import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintTaskDefinition} from './deserializeIntoPrintTaskDefinition';
import {deserializeIntoPrintTaskStatus} from './deserializeIntoPrintTaskStatus';
import {deserializeIntoPrintTaskTrigger} from './deserializeIntoPrintTaskTrigger';
import {PrintTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTask(printTask: PrintTask | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTask),
        "definition": n => { printTask.definition = n.getObject(deserializeIntoPrintTaskDefinition) as any ; },
        "parentUrl": n => { printTask.parentUrl = n.getStringValue() as any ; },
        "status": n => { printTask.status = n.getObject(deserializeIntoPrintTaskStatus) as any ; },
        "trigger": n => { printTask.trigger = n.getObject(deserializeIntoPrintTaskTrigger) as any ; },
    }
}
