import {FieldValueSet} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFieldValueSet(writer: SerializationWriter, fieldValueSet: FieldValueSet | undefined = {}) : void {
        serializeEntity(writer, fieldValueSet)
}
