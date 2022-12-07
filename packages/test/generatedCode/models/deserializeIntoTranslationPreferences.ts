import {deserializeIntoTranslationLanguageOverride} from './deserializeIntoTranslationLanguageOverride';
import {TranslationPreferences} from './index';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslationPreferences(translationPreferences: TranslationPreferences | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "languageOverrides": n => { translationPreferences.languageOverrides = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTranslationLanguageOverride) as any ; },
        "translationBehavior": n => { translationPreferences.translationBehavior = n.getEnumValue<TranslationBehavior>(TranslationBehavior) as any ; },
        "untranslatedLanguages": n => { translationPreferences.untranslatedLanguages = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
