import {IosManagedAppRegistration} from './index';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppRegistration(writer: SerializationWriter, iosManagedAppRegistration: IosManagedAppRegistration | undefined = {}) : void {
        serializeManagedAppRegistration(writer, iosManagedAppRegistration)
}
