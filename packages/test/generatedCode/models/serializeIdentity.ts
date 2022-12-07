import {Identity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(writer: SerializationWriter, identity: Identity | undefined = {}) : void {
            writer.writeStringValue("displayName", identity.displayName);
            writer.writeStringValue("id", identity.id);
}
