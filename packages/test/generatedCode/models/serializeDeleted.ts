import {Deleted} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleted(writer: SerializationWriter, deleted: Deleted | undefined = {}) : void {
            writer.writeStringValue("@odata.type", deleted.odataType);
            writer.writeStringValue("state", deleted.state);
}
