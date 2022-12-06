import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ResourceOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceOperation(resourceOperation: ResourceOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(resourceOperation),
        "actionName": n => { resourceOperation.actionName = n.getStringValue() as any ; },
        "description": n => { resourceOperation.description = n.getStringValue() as any ; },
        "resourceName": n => { resourceOperation.resourceName = n.getStringValue() as any ; },
    }
}
