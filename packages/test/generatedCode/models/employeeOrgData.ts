import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EmployeeOrgData extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The cost center associated with the user. Returned only on $select. Supports $filter. */
    costCenter?: string;
    /** The name of the division in which the user works. Returned only on $select. Supports $filter. */
    division?: string;
    /** The OdataType property */
    odataType?: string;
}
