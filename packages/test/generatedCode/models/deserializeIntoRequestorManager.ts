import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {RequestorManager} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestorManager(requestorManager: RequestorManager | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(requestorManager),
        "managerLevel": n => { requestorManager.managerLevel = n.getNumberValue() as any ; },
    }
}
