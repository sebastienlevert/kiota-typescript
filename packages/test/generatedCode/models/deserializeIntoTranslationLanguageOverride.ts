import {TranslationLanguageOverride} from './index';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTranslationLanguageOverride(translationLanguageOverride: TranslationLanguageOverride | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "languageTag": n => { translationLanguageOverride.languageTag = n.getStringValue() as any ; },
        "translationBehavior": n => { translationLanguageOverride.translationBehavior = n.getEnumValue<TranslationBehavior>(TranslationBehavior) as any ; },
    }
}
