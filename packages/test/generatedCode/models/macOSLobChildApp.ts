import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSLobChildApp extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The build number of the app. */
    buildNumber?: string;
    /** The bundleId of the app. */
    bundleId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The version number of the app. */
    versionNumber?: string;
}
