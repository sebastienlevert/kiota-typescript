import {Entity} from './entity';
import {Extension} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtension(extension: Extension | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(extension),
    }
}
