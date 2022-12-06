import {ProvisioningSystem} from './index';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningSystem(writer: SerializationWriter, provisioningSystem: ProvisioningSystem | undefined = {}) : void {
        serializeIdentity(writer, provisioningSystem)
            writer.writeObjectValueFromMethod("details", provisioningSystem.details as any, serializeDetailsInfo);
}
