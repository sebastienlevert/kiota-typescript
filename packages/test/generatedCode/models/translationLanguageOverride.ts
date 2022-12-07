import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TranslationLanguageOverride extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The language to apply the override.Returned by default. Not nullable. */
    languageTag?: string;
    /** The translationBehavior property */
    translationBehavior?: TranslationBehavior;
}
