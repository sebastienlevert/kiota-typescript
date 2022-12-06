import {serializeEntity} from '../serializeEntity';
import {serializeKeyValue} from '../serializeKeyValue';
import {Term} from './index';
import {serializeLocalizedDescription} from './serializeLocalizedDescription';
import {serializeLocalizedLabel} from './serializeLocalizedLabel';
import {serializeRelation} from './serializeRelation';
import {serializeSet} from './serializeSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTerm(writer: SerializationWriter, term: Term | undefined = {}) : void {
        serializeEntity(writer, term)
            writer.writeCollectionOfObjectValuesFromMethod("children", term.children as any, serializeTerm);
            writer.writeDateValue("createdDateTime", term.createdDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("descriptions", term.descriptions as any, serializeLocalizedDescription);
            writer.writeCollectionOfObjectValuesFromMethod("labels", term.labels as any, serializeLocalizedLabel);
            writer.writeDateValue("lastModifiedDateTime", term.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("properties", term.properties as any, serializeKeyValue);
            writer.writeCollectionOfObjectValuesFromMethod("relations", term.relations as any, serializeRelation);
            writer.writeObjectValueFromMethod("set", term.set as any, serializeSet);
}
