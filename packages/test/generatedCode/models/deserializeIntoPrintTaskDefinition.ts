import {deserializeIntoAppIdentity} from './deserializeIntoAppIdentity';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintTask} from './deserializeIntoPrintTask';
import {PrintTaskDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskDefinition(printTaskDefinition: PrintTaskDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTaskDefinition),
        "createdBy": n => { printTaskDefinition.createdBy = n.getObject(deserializeIntoAppIdentity) as any ; },
        "displayName": n => { printTaskDefinition.displayName = n.getStringValue() as any ; },
        "tasks": n => { printTaskDefinition.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTask) as any ; },
    }
}
