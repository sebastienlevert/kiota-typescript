import {Set, Term} from './termStore/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TermColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies whether the column will allow more than one value */
    allowMultipleValues?: boolean;
    /** The parentTerm property */
    parentTerm?: Term;
    /** Specifies whether to display the entire term path or only the term label. */
    showFullyQualifiedName?: boolean;
    /** The termSet property */
    termSet?: Set;
}
