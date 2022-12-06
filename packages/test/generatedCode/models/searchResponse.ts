import {AlterationResponse, ResultTemplateDictionary, SearchHitsContainer} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of search results. */
    hitsContainers?: SearchHitsContainer[];
    /** The OdataType property */
    odataType?: string;
    /** Provides information related to spelling corrections in the alteration response. */
    queryAlterationResponse?: AlterationResponse;
    /** A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates. */
    resultTemplates?: ResultTemplateDictionary;
    /** Contains the search terms sent in the initial search query. */
    searchTerms?: string[];
}
