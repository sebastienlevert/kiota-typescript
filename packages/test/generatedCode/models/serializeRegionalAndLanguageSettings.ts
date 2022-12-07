import {RegionalAndLanguageSettings} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {serializeRegionalFormatOverrides} from './serializeRegionalFormatOverrides';
import {serializeTranslationPreferences} from './serializeTranslationPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegionalAndLanguageSettings(writer: SerializationWriter, regionalAndLanguageSettings: RegionalAndLanguageSettings | undefined = {}) : void {
        serializeEntity(writer, regionalAndLanguageSettings)
            writer.writeCollectionOfObjectValuesFromMethod("authoringLanguages", regionalAndLanguageSettings.authoringLanguages as any, serializeLocaleInfo);
            writer.writeObjectValueFromMethod("defaultDisplayLanguage", regionalAndLanguageSettings.defaultDisplayLanguage as any, serializeLocaleInfo);
            writer.writeObjectValueFromMethod("defaultRegionalFormat", regionalAndLanguageSettings.defaultRegionalFormat as any, serializeLocaleInfo);
            writer.writeObjectValueFromMethod("defaultSpeechInputLanguage", regionalAndLanguageSettings.defaultSpeechInputLanguage as any, serializeLocaleInfo);
            writer.writeObjectValueFromMethod("defaultTranslationLanguage", regionalAndLanguageSettings.defaultTranslationLanguage as any, serializeLocaleInfo);
            writer.writeObjectValueFromMethod("regionalFormatOverrides", regionalAndLanguageSettings.regionalFormatOverrides as any, serializeRegionalFormatOverrides);
            writer.writeObjectValueFromMethod("translationPreferences", regionalAndLanguageSettings.translationPreferences as any, serializeTranslationPreferences);
}
