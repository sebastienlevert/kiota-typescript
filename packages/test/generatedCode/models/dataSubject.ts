import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DataSubject extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Email of the data subject. */
    email?: string;
    /** First name of the data subject. */
    firstName?: string;
    /** Last Name of the data subject. */
    lastName?: string;
    /** The OdataType property */
    odataType?: string;
    /** The country/region of residency. The residency information is uesed only for internal reporting but not for the content search. */
    residency?: string;
}
