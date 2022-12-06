import {Entity} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchHit extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the content source that the externalItem is part of. */
    contentSource?: string;
    /** The internal identifier for the item. The format of the identifier varies based on the entity type. For details, see hitId format. */
    hitId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The rank or the order of the result. */
    rank?: number;
    /** The resource property */
    resource?: Entity;
    /** ID of the result template used to render the search result. This ID must map to a display layout in the resultTemplates dictionary that is also included in the searchResponse. */
    resultTemplateId?: string;
    /** A summary of the result, if a summary is available. */
    summary?: string;
}
