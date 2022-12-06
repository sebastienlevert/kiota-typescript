import {WindowsDeviceAccount} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateWindowsDeviceAccountActionParameter extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Not yet documented */
    calendarSyncEnabled?: boolean;
    /** Not yet documented */
    deviceAccount?: WindowsDeviceAccount;
    /** Not yet documented */
    deviceAccountEmail?: string;
    /** Not yet documented */
    exchangeServer?: string;
    /** The OdataType property */
    odataType?: string;
    /** Not yet documented */
    passwordRotationEnabled?: boolean;
    /** Not yet documented */
    sessionInitiationProtocalAddress?: string;
}
