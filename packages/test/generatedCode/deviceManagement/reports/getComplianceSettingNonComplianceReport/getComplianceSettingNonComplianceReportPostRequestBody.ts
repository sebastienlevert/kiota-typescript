import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetComplianceSettingNonComplianceReportPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The filter property */
    filter?: string;
    /** The groupBy property */
    groupBy?: string[];
    /** The name property */
    name?: string;
    /** The orderBy property */
    orderBy?: string[];
    /** The search property */
    search?: string;
    /** The select property */
    select?: string[];
    /** The sessionId property */
    sessionId?: string;
    /** The skip property */
    skip?: number;
    /** The top property */
    top?: number;
}
