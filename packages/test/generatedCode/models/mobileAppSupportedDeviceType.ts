import {DeviceType} from './deviceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppSupportedDeviceType extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Maximum OS version */
    maximumOperatingSystemVersion?: string;
    /** Minimum OS version */
    minimumOperatingSystemVersion?: string;
    /** Device type. */
    type?: DeviceType;
}
