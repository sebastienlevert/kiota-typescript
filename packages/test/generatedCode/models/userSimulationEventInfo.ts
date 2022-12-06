import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationEventInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Browser information from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    browser?: string;
    /** Date and time of the simulation event by a user in an attack simulation and training campaign. */
    eventDateTime?: Date;
    /** Name of the simulation event by a user in an attack simulation and training campaign. */
    eventName?: string;
    /** IP address from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    ipAddress?: string;
    /** The OdataType property */
    odataType?: string;
    /** The operating system, platform, and device details from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    osPlatformDeviceDetails?: string;
}
