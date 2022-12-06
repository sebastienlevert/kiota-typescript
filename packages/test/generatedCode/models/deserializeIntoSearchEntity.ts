import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SearchEntity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchEntity(searchEntity: SearchEntity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(searchEntity),
    }
}
