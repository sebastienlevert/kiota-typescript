import {SortProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSortProperty(writer: SerializationWriter, sortProperty: SortProperty | undefined = {}) : void {
            writer.writeBooleanValue("isDescending", sortProperty.isDescending);
            writer.writeStringValue("name", sortProperty.name);
            writer.writeStringValue("@odata.type", sortProperty.odataType);
}
