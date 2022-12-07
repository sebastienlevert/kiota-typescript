import {Entity, LocaleInfo, RegionalFormatOverrides, TranslationPreferences} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RegionalAndLanguageSettings extends Entity, Partial<Parsable> {
    /** Prioritized list of languages the user reads and authors in.Returned by default. Not nullable. */
    authoringLanguages?: LocaleInfo[];
    /** The defaultDisplayLanguage property */
    defaultDisplayLanguage?: LocaleInfo;
    /** The defaultRegionalFormat property */
    defaultRegionalFormat?: LocaleInfo;
    /** The defaultSpeechInputLanguage property */
    defaultSpeechInputLanguage?: LocaleInfo;
    /** The defaultTranslationLanguage property */
    defaultTranslationLanguage?: LocaleInfo;
    /** The regionalFormatOverrides property */
    regionalFormatOverrides?: RegionalFormatOverrides;
    /** The translationPreferences property */
    translationPreferences?: TranslationPreferences;
}
