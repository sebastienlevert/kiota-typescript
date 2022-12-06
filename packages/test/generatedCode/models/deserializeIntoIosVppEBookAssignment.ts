import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {IosVppEBookAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppEBookAssignment(iosVppEBookAssignment: IosVppEBookAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedEBookAssignment(iosVppEBookAssignment),
    }
}
