import {CertificationControl} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Collection of the certification controls associated with certification */
    certificationControls?: CertificationControl[];
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171) */
    certificationName?: string;
    /** The OdataType property */
    odataType?: string;
}
