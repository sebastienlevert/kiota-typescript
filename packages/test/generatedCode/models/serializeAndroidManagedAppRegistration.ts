import {AndroidManagedAppRegistration} from './index';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppRegistration(writer: SerializationWriter, androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {}) : void {
        serializeManagedAppRegistration(writer, androidManagedAppRegistration)
}
