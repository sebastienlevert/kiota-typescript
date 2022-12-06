import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {AndroidManagedAppRegistration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppRegistration(androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(androidManagedAppRegistration),
    }
}
