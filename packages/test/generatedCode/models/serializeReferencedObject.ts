import {ReferencedObject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferencedObject(writer: SerializationWriter, referencedObject: ReferencedObject | undefined = {}) : void {
            writer.writeStringValue("referencedObjectName", referencedObject.referencedObjectName);
            writer.writeStringValue("referencedProperty", referencedObject.referencedProperty);
}
