import {TranslationLanguageOverride} from './index';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTranslationLanguageOverride(writer: SerializationWriter, translationLanguageOverride: TranslationLanguageOverride | undefined = {}) : void {
            writer.writeStringValue("languageTag", translationLanguageOverride.languageTag);
            writer.writeEnumValue<TranslationBehavior>("translationBehavior", translationLanguageOverride.translationBehavior);
}
