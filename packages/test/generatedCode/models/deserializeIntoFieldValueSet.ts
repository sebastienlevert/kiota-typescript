import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FieldValueSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFieldValueSet(fieldValueSet: FieldValueSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(fieldValueSet),
    }
}
