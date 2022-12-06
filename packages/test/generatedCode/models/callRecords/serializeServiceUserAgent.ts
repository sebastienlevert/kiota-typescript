import {ServiceUserAgent} from './index';
import {serializeUserAgent} from './serializeUserAgent';
import {ServiceRole} from './serviceRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUserAgent(writer: SerializationWriter, serviceUserAgent: ServiceUserAgent | undefined = {}) : void {
        serializeUserAgent(writer, serviceUserAgent)
            writer.writeEnumValue<ServiceRole>("role", serviceUserAgent.role);
}
