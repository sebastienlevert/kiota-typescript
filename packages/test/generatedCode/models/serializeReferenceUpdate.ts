import {ReferenceUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceUpdate(writer: SerializationWriter, referenceUpdate: ReferenceUpdate | undefined = {}) : void {
            writer.writeStringValue("@odata.id", referenceUpdate.odataId);
            writer.writeStringValue("@odata.type", referenceUpdate.odataType);
}
