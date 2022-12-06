import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SigningCertificateUpdateStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status. */
    certificateUpdateResult?: string;
    /** Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only. */
    lastRunDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
}
