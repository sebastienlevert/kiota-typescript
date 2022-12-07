import {PhysicalAddress} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CompanyDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The address property */
    address?: PhysicalAddress;
    /** Department Name within a company. */
    department?: string;
    /** Company name. */
    displayName?: string;
    /** Office Location of the person referred to. */
    officeLocation?: string;
    /** Pronunciation guide for the company name. */
    pronunciation?: string;
    /** Link to the company home page. */
    webUrl?: string;
}
