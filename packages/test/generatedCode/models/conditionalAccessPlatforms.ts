import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPlatforms extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    excludePlatforms?: ConditionalAccessDevicePlatform[];
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    includePlatforms?: ConditionalAccessDevicePlatform[];
    /** The OdataType property */
    odataType?: string;
}
