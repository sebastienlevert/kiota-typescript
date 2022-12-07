import {CompanyDetail} from './index';
import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PositionDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The company property */
    company?: CompanyDetail;
    /** Description of the position in question. */
    description?: string;
    /** When the position ended. */
    endMonthYear?: DateOnly;
    /** The title held when in that position. */
    jobTitle?: string;
    /** The role the position entailed. */
    role?: string;
    /** The start month and year of the position. */
    startMonthYear?: DateOnly;
    /** Short summary of the position. */
    summary?: string;
}
