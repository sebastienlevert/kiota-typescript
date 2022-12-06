import {ProvisionedIdentity} from './index';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionedIdentity(writer: SerializationWriter, provisionedIdentity: ProvisionedIdentity | undefined = {}) : void {
        serializeIdentity(writer, provisionedIdentity)
            writer.writeObjectValueFromMethod("details", provisionedIdentity.details as any, serializeDetailsInfo);
            writer.writeStringValue("identityType", provisionedIdentity.identityType);
}
