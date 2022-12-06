import {ReferenceCreate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceCreate(writer: SerializationWriter, referenceCreate: ReferenceCreate | undefined = {}) : void {
            writer.writeStringValue("@odata.id", referenceCreate.odataId);
}
