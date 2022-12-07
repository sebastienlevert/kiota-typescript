import {AddIn} from './index';
import {serializeKeyValue} from './serializeKeyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddIn(writer: SerializationWriter, addIn: AddIn | undefined = {}) : void {
            writer.writeStringValue("id", addIn.id);
            writer.writeCollectionOfObjectValuesFromMethod("properties", addIn.properties as any, serializeKeyValue);
            writer.writeStringValue("type", addIn.type);
}
