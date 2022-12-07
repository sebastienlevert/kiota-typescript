import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingErrorResource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The link to the web resource. Can contain any of the following formatters: {{UPN}}, {{DeviceGUID}}, {{UserGUID}} */
    link?: string;
    /** Not yet documented */
    text?: string;
}
