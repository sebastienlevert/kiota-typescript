import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {IosManagedAppRegistration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppRegistration(iosManagedAppRegistration: IosManagedAppRegistration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(iosManagedAppRegistration),
    }
}
