import {TranslationLanguageOverride} from './index';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TranslationPreferences extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Translation override behavior for languages, if any.Returned by default. */
    languageOverrides?: TranslationLanguageOverride[];
    /** The translationBehavior property */
    translationBehavior?: TranslationBehavior;
    /** The list of languages the user does not need translated. This is computed from the authoringLanguages collection in regionalAndLanguageSettings, and the languageOverrides collection in translationPreferences. The list specifies neutral culture values that include the language code without any country or region association. For example, it would specify 'fr' for the neutral French culture, but not 'fr-FR' for the French culture in France. Returned by default. Read only. */
    untranslatedLanguages?: string[];
}
