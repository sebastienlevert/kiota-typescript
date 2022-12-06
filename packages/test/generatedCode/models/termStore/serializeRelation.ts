import {serializeEntity} from '../serializeEntity';
import {Relation} from './index';
import {RelationType} from './relationType';
import {serializeSet} from './serializeSet';
import {serializeTerm} from './serializeTerm';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelation(writer: SerializationWriter, relation: Relation | undefined = {}) : void {
        serializeEntity(writer, relation)
            writer.writeObjectValueFromMethod("fromTerm", relation.fromTerm as any, serializeTerm);
            writer.writeEnumValue<RelationType>("relationship", relation.relationship);
            writer.writeObjectValueFromMethod("set", relation.set as any, serializeSet);
            writer.writeObjectValueFromMethod("toTerm", relation.toTerm as any, serializeTerm);
}
