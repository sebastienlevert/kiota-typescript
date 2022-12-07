import {TranslationLanguageOverride} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslationLanguageOverrideFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslationLanguageOverride {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslationLanguageOverride();
}
