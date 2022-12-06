import {ManagedAppStatusRaw} from './index';
import {serializeJson} from './serializeJson';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusRaw(writer: SerializationWriter, managedAppStatusRaw: ManagedAppStatusRaw | undefined = {}) : void {
        serializeManagedAppStatus(writer, managedAppStatusRaw)
            writer.writeObjectValueFromMethod("content", managedAppStatusRaw.content as any, serializeJson);
}
