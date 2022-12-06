import {SearchAlteration} from './index';
import {SearchAlterationType} from './searchAlterationType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlterationResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Defines the original user query string. */
    originalQueryString?: string;
    /** Defines the details of the alteration information for the spelling correction. */
    queryAlteration?: SearchAlteration;
    /** Defines the type of the spelling correction. Possible values are: suggestion, modification. */
    queryAlterationType?: SearchAlterationType;
}
