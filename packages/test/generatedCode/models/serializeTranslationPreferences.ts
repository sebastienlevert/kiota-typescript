import {TranslationPreferences} from './index';
import {serializeTranslationLanguageOverride} from './serializeTranslationLanguageOverride';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslationPreferences(writer: SerializationWriter, translationPreferences: TranslationPreferences | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("languageOverrides", translationPreferences.languageOverrides as any, serializeTranslationLanguageOverride);
            writer.writeEnumValue<TranslationBehavior>("translationBehavior", translationPreferences.translationBehavior);
            writer.writeCollectionOfPrimitiveValues<string>("untranslatedLanguages", translationPreferences.untranslatedLanguages);
}
