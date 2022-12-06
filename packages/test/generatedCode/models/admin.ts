import {ServiceAnnouncement} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Admin extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** A container for service communications resources. Read-only. */
    serviceAnnouncement?: ServiceAnnouncement;
}
