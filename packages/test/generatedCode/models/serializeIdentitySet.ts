import {IdentitySet} from './index';
import {serializeIdentity} from './serializeIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySet(writer: SerializationWriter, identitySet: IdentitySet | undefined = {}) : void {
            writer.writeObjectValueFromMethod("application", identitySet.application as any, serializeIdentity);
            writer.writeObjectValueFromMethod("device", identitySet.device as any, serializeIdentity);
            writer.writeStringValue("@odata.type", identitySet.odataType);
            writer.writeObjectValueFromMethod("user", identitySet.user as any, serializeIdentity);
}
