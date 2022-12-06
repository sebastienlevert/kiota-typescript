import {serializeEntity} from '../serializeEntity';
import {Schema} from './index';
import {serializeProperty} from './serializeProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchema(writer: SerializationWriter, schema: Schema | undefined = {}) : void {
        serializeEntity(writer, schema)
            writer.writeStringValue("baseType", schema.baseType);
            writer.writeCollectionOfObjectValuesFromMethod("properties", schema.properties as any, serializeProperty);
}
