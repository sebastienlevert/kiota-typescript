import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecommendedAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Web URL to the recommended action. */
    actionWebUrl?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Potential improvement in the tenant security score from the recommended action. */
    potentialScoreImpact?: number;
    /** Title of the recommended action. */
    title?: string;
}
