import {Entity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntity(entity: Entity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { entity.id = n.getStringValue() as any ; },
    }
}
