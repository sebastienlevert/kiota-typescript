import {Shared} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShared(writer: SerializationWriter, shared: Shared | undefined = {}) : void {
            writer.writeObjectValueFromMethod("owner", shared.owner as any, serializeIdentitySet);
            writer.writeStringValue("scope", shared.scope);
            writer.writeObjectValueFromMethod("sharedBy", shared.sharedBy as any, serializeIdentitySet);
            writer.writeDateValue("sharedDateTime", shared.sharedDateTime);
}
