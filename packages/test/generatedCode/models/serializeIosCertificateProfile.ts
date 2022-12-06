import {IosCertificateProfile} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCertificateProfile(writer: SerializationWriter, iosCertificateProfile: IosCertificateProfile | undefined = {}) : void {
        serializeDeviceConfiguration(writer, iosCertificateProfile)
}
