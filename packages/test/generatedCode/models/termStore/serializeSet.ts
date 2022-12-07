import {serializeEntity} from '../serializeEntity';
import {serializeKeyValue} from '../serializeKeyValue';
import {Set} from './index';
import {serializeGroup} from './serializeGroup';
import {serializeLocalizedName} from './serializeLocalizedName';
import {serializeRelation} from './serializeRelation';
import {serializeTerm} from './serializeTerm';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSet(writer: SerializationWriter, set: Set | undefined = {}) : void {
        serializeEntity(writer, set)
            writer.writeCollectionOfObjectValuesFromMethod("children", set.children as any, serializeTerm);
            writer.writeDateValue("createdDateTime", set.createdDateTime);
            writer.writeStringValue("description", set.description);
            writer.writeCollectionOfObjectValuesFromMethod("localizedNames", set.localizedNames as any, serializeLocalizedName);
            writer.writeObjectValueFromMethod("parentGroup", set.parentGroup as any, serializeGroup);
            writer.writeCollectionOfObjectValuesFromMethod("properties", set.properties as any, serializeKeyValue);
            writer.writeCollectionOfObjectValuesFromMethod("relations", set.relations as any, serializeRelation);
            writer.writeCollectionOfObjectValuesFromMethod("terms", set.terms as any, serializeTerm);
}
