import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {IosCertificateProfile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCertificateProfile(iosCertificateProfile: IosCertificateProfile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosCertificateProfile),
    }
}
