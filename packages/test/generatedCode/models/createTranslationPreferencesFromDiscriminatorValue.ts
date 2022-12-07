import {TranslationPreferences} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslationPreferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) : TranslationPreferences {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TranslationPreferences();
}
