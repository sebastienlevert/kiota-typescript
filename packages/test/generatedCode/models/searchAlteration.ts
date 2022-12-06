import {AlteredQueryToken} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAlteration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is: /ue000, /ue001. */
    alteredHighlightedQueryString?: string;
    /** Defines the altered query string with spelling correction. */
    alteredQueryString?: string;
    /** Represents changed segments related to an original user query. */
    alteredQueryTokens?: AlteredQueryToken[];
    /** The OdataType property */
    odataType?: string;
}
