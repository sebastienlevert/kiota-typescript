import {DisplayNameLocalization} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnValidation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Default BCP 47 language tag for the description. */
    defaultLanguage?: string;
    /** Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails. */
    descriptions?: DisplayNameLocalization[];
    /** The formula to validate column value. For examples, see Examples of common formulas in lists */
    formula?: string;
}
