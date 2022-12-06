import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {SingleUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleUser(singleUser: SingleUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleUser),
        "description": n => { singleUser.description = n.getStringValue() as any ; },
        "userId": n => { singleUser.userId = n.getStringValue() as any ; },
    }
}
